import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { BusinessCategoriesForm } from "./BusinessCategoriesForm";


const updateBusinessCategories = (payload) => {
  return axiosInstance.put(`/business-categories/${payload.id}`, payload);
};

const getBusinessCategoriesDetails = (id) => {
  return axiosInstance.get(`/business-categories/${id}`).then((res) => res.data);
};

export const EditBusinessCategoriesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: BusinessCategoriesDetails, error } = useQuery({
    queryKey: ["BusinessCategories-details", id],
    queryFn: () => getBusinessCategoriesDetails(id),
  });

  const updateBusinessCategoriesMutation = useMutation({
    mutationFn: updateBusinessCategories,
  });

  const handleUpdateBusinessCategories = (values) => {
    updateBusinessCategoriesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {BusinessCategoriesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit BusinessCategories</Modal.Title>
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
            <BusinessCategoriesForm
              initialValues={BusinessCategoriesDetails}
              handleSubmit={handleUpdateBusinessCategories}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
