import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { ListtedBusinessForm } from "./ListtedBusinessForm";


const updateListtedBusiness = (payload) => {
  return axiosInstance.put(`/business-categories/${payload.id}`, payload);
};

const getListtedBusinessDetails = (id) => {
  return axiosInstance.get(`/business-categories/${id}`).then((res) => res.data);
};

export const EditListtedBusinessModal = ({ handleSuccess, handleClose, id }) => {
  const { data: ListtedBusinessDetails, error } = useQuery({
    queryKey: ["ListtedBusiness-details", id],
    queryFn: () => getListtedBusinessDetails(id),
  });

  const updateListtedBusinessMutation = useMutation({
    mutationFn: updateListtedBusiness,
  });

  const handleUpdateListtedBusiness = (values) => {
    updateListtedBusinessMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {ListtedBusinessDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Listted Business</Modal.Title>
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
            <ListtedBusinessForm
              initialValues={ListtedBusinessDetails}
              handleSubmit={handleUpdateListtedBusiness}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
