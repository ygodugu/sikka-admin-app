import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../../axiosInstance";
import { ServicesForm } from "./MerchantServicesForm";

const updateServices = (payload) => {
  return axiosInstance.put(`/services/${payload.id}`, payload);
};

const getServicesDetails = (id) => {
  return axiosInstance.get(`/services/${id}`).then((res) => res.data);
};

export const EditMerchantServicesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: MerchantServicesDetails, error } = useQuery({
    queryKey: ["MerchantServices-details", id],
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
      {MerchantServicesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Merchant-Service</Modal.Title>
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
              initialValues={MerchantServicesDetails}
              handleSubmit={handleUpdateIndustries}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
