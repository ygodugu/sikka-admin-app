import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../../../axiosInstance";
import { MerchantServiceAppointmentBlockingForm } from "./MerchantServiceAppointmentBlockingForm";

const updateServices = (payload) => {
  return axiosInstance.put(`/appointment-blocking/${payload.id}`, payload);
};

const getServicesDetails = (id) => {
  return axiosInstance.get(`/appointment-blocking/${id}`).then((res) => res.data);
};

export const EditMerchantServiceAppointmentBlockingModal = ({ handleSuccess, handleClose, id }) => {
  const { data: MerchantServiceAppointmentBlockingDetails, error } = useQuery({
    queryKey: ["MerchantServiceAppointmentBlocking-details", id],
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
      {MerchantServiceAppointmentBlockingDetails && (
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
            <MerchantServiceAppointmentBlockingForm
              initialValues={MerchantServiceAppointmentBlockingDetails}
              handleSubmit={handleUpdateIndustries}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
