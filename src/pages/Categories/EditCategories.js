import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CategoriesForm } from "./CategoriesForm";

const updateCategories = (payload) => {
  return axiosInstance.put(`/categories/${payload.id}`, payload);
};

const getCategoriesDetails = (id) => {
  return axiosInstance.get(`/categories/${id}`).then((res) => res.data);
};

export const EditCategoriesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: CategoriesDetails, error } = useQuery({
    queryKey: ["Categories-details", id],
    queryFn: () => getCategoriesDetails(id),
  });

  const updateCategoriesMutation = useMutation({
    mutationFn: updateCategories,
  });

  const handleUpdateCategories = (values) => {
    updateCategoriesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {CategoriesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Categories</Modal.Title>
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
              initialValues={CategoriesDetails}
              handleSubmit={handleUpdateCategories}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
