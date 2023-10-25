import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { BusinessCategoriesForm } from "./BusinessCategoriesForm";

const addBusinessCategories = (payload) => {
  return axiosInstance.post(`/business-categories`, payload);
};

export const AddBusinessCategoriesModal = ({ handleSuccess, handleClose }) => {
  const addBusinessCategoriesMutation = useMutation({
    mutationFn: addBusinessCategories,
  });
  const initialValues = {
    name: "",
    description: "",
    status : ""
  };

  const saveBusinessCategories = (values) => {
    addBusinessCategoriesMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New BusinessCategories</Modal.Title>
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
        <BusinessCategoriesForm initialValues={initialValues} isAdd={true} handleSubmit={saveBusinessCategories} />
      </Modal.Body>
    </Modal>
  );
};
