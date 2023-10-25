import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CategoriesForm } from "./CategoriesForm";

const addCategories = (payload) => {
  return axiosInstance.post(`/categories`, payload);
};

export const AddCategoriesModal = ({ handleSuccess, handleClose }) => {
  const addCategoriesMutation = useMutation({
    mutationFn: addCategories,
  });
  const initialValues = {
    name: "",
    description: "",
    status: ""
  };

  const saveCategories = (values) => {
    addCategoriesMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Categories</Modal.Title>
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
        <CategoriesForm
          initialValues={initialValues}
          handleSubmit={saveCategories}
          isAdd={true}
        />
      </Modal.Body>
    </Modal>
  );
};
