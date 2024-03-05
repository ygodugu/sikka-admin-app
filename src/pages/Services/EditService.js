import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { ServicesForm } from "./ServicesForm";

const updateServices = (payload) => {
  return axiosInstance.put(`/services/${payload.id}`, payload);
};

const getServicesDetails = (id) => {
  return axiosInstance.get(`/services/${id}`).then((res) => res.data);
};

export const EditServicesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: ServicesDetails, error } = useQuery({
    queryKey: ["Services-details", id],
    queryFn: () => getServicesDetails(id),
  });

  const updateServicesMutation = useMutation({
    mutationFn: updateServices,
  });

  const handleUpdateIndustries = (values) => {
    updateServicesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {ServicesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Service</Modal.Title>
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
            <ServicesForm
              initialValues={ServicesDetails}
              handleSubmit={handleUpdateIndustries}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
