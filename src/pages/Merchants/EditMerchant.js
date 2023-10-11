import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { MerchantForm } from "./MerchantForm";

const updateMerchant = (payload) => {
  return axiosInstance.put(`/merchants/${payload.id}`, payload);
};

const getMerchantDetails = (id) => {
  return axiosInstance.get(`/merchants/${id}`).then((res) => res.data);
};

export const EditMerchantModal = ({ handleSuccess, handleClose, id }) => {
  const { data: merchantDetails } = useQuery({
    queryKey: ["merchant-details", id],
    queryFn: () => getMerchantDetails(id),
  });

  const updateMerchantMutation = useMutation({
    mutationFn: updateMerchant,
  });

  const handleUpdateUser = (values) => {
    updateMerchantMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };


  return (
    <>
      {merchantDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Merchant</Modal.Title>
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
            <MerchantForm
              initialValues={merchantDetails}
              handleSubmit={handleUpdateUser}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
