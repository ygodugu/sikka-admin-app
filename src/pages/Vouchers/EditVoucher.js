import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { VoucherForm } from "./VoucherForm";

const updatevoucher = (payload) => {
  return axiosInstance.put(`/users/${payload.id}`, payload);
};

const getVoucherDetails = (id) => {
  return axiosInstance.get(`/users/${id}`).then((res) => res.data);
};

export const EditVoucherModal = ({ handleSuccess, handleClose, id }) => {
  const { data: voucherDetails } = useQuery({
    queryKey: ["voucher-details", id],
    queryFn: () => getVoucherDetails(id),
    select: (data) => {
      const { address, ...rest } = data;

      const addressType = address[0].addressType;
      const addressLine2 = address[0].addressLine2;
      const addressLine1 = address[0].addressLine1;
      const cityId = address[0].cityId;
      return {
        ...rest,
        addressType,
        addressLine1,
        addressLine2,
        cityId,
        addressId: address[0]?.id,
      };
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: updatevoucher,
  });

  const handleUpdateVoucher = (values) => {
    const roleId = 1;
    const {
      country,
      city,
      state,
      cityId,
      countryId,
      stateId,
      addressLine1,
      addressLine2,
      ...rest
    } = values;
    const address = [
      {
        addressLine1,
        addressLine2,
        cityId,
        id: voucherDetails.addressId,
        addressType: "Current",
      },
    ];
    updateUserMutation.mutate(
      { ...rest, id, address },
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
            <Modal.Title>Edit User</Modal.Title>
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
              initialValues={{ ...voucherDetails, city: [] }}
              handleSubmit={handleUpdateVoucher}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
