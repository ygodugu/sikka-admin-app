import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { IndustriesForm } from "./IndustriesForm";

const addIndustries = (payload) => {
  return axiosInstance.post(`/industries`, payload);
};

export const AddIndustriesModal = ({ handleSuccess, handleClose }) => {
  const addIndustriesMutation = useMutation({
    mutationFn: addIndustries,
  });
  const initialValues = {
    name: "",
    description: "",
    status : ""
  };

  const saveIndustries = (values) => {
    addIndustriesMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Industrie</Modal.Title>
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
        <IndustriesForm initialValues={initialValues} isAdd={true} handleSubmit={saveIndustries} />
      </Modal.Body>
    </Modal>
  );
};
