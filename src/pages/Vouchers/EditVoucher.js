import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { VoucherForm } from "./VoucherForm";

const updatevoucher = (payload) => {
  return axiosInstance.put(`/vouchers/${payload.id}`, payload);
};

const getVoucherDetails = (id) => {
  return axiosInstance.get(`/vouchers/${id}`).then((res) => res.data);
};

export const EditVoucherModal = ({ handleSuccess, handleClose, id }) => {
  const { data: voucherDetails } = useQuery({
    queryKey: ["voucher-details", id],
    queryFn: () => getVoucherDetails(id)
  });

  const updateVoucherMutation = useMutation({
    mutationFn: updatevoucher,
  });


  
  const handleUpdateVoucher = (values) => {
    updateVoucherMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };


  return (
    <>
      {voucherDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Voucher</Modal.Title>
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
            <VoucherForm
              initialValues={voucherDetails}
              handleSubmit={handleUpdateVoucher}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
