import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { UserForm } from "./UserForm";

const updateUser = (payload) => {
  return axiosInstance.put(`/users/${payload.id}`, payload);
};

const getUserDetails = (id) => {
  return axiosInstance.get(`/users/${id}`).then((res) => res.data);
};

export const EditUserModal = ({ handleSuccess, handleClose, id }) => {
  const { data: userDetails } = useQuery({
    queryKey: ["user-details", id],
    queryFn: () => getUserDetails(id),
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
    mutationFn: updateUser,
  });

  const handleUpdateUser = (values) => {
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
        id: userDetails.addressId,
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
      {userDetails && (
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
            <UserForm
              initialValues={{ ...userDetails, city: [] }}
              handleSubmit={handleUpdateUser}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
