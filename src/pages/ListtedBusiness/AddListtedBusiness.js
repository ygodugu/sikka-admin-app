import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { ListtedBusinessForm } from "./ListtedBusinessForm";

const addListtedBusiness = (payload) => {
  return axiosInstance.post(`/business-categories`, payload);
};

export const AddListtedBusinessModal = ({ handleSuccess, handleClose }) => {
  const addListtedBusinessMutation = useMutation({
    mutationFn: addListtedBusiness,
  });
  const initialValues = {
    name: "",
    description: "",
    status : ""
  };

  const saveListtedBusiness = (values) => {
    addListtedBusinessMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Listted Business</Modal.Title>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={handleClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <ListtedBusinessForm initialValues={initialValues} isAdd={true} handleSubmit={saveListtedBusiness} />
      </Modal.Body>
    </Modal>
  );
};
