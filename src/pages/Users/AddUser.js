import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { UserForm } from "./UserForm";

const addUser = (payload) => {
  return axiosInstance.post(`/users`, payload);
};

export const AddUserModal = ({ handleSuccess, handleClose }) => {
  const addUserMutation = useMutation({
    mutationFn: addUser,
  });
  const initialValues = {
    email: "",
    password: "",
    alternativeMobile: "",
    confirmPassword: "",
    dateOfBirth: "",
    lastName: "",
    middleName: "",
    primaryMobile: "",
    roleId: 1,
    userType: "",
  };

  const saveUser = (values) => {
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
        addressType: "Current",
      },
    ];
    addUserMutation.mutate(
      {
        ...rest,
        roleId,
        password: "Test@123",
        confirmPassword: "Test@123",
        address,
      },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New User</Modal.Title>
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
        <UserForm initialValues={initialValues} handleSubmit={saveUser} />
      </Modal.Body>
    </Modal>
  );
};
