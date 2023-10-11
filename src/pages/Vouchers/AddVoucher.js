import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { VoucherForm } from "./VoucherForm"

const addVoucher = (payload) => {
  return axiosInstance.post(`/vouchers`, payload);
};

export const AddVoucherModal = ({ handleSuccess, handleClose }) => {
  const addUserMutation = useMutation({
    mutationFn: addVoucher,
  });
  const initialValues = {
    voucherCode: "",
    voucherValue: "",
    name: "",
    consumedCount: "",
    maxUsageCount: "",
    restrictUsageForUser: true,
    description: "",
    validityEndDate: "",
    validityStartDate: "",
    voucherValueType: ""
  };

  const saveVoucher = (values) => {
    addUserMutation.mutate(
      {
        ...values,
        categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        merchantId: "58bf45d9-de52-4fd9-b265-a2e33145c88a",
        voucherAssetId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Voucher</Modal.Title>
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
        <VoucherForm initialValues={initialValues} handleSubmit={saveVoucher} />
      </Modal.Body>
    </Modal>
  );
};
