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
    userType: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    alternativeNumber: "",
    shortBio: "",
    motherTongue: "",
    bloodGroup: "",
    dateOfBirth: "",
    anniversaryDate: "",
    religion: "",
    status : ""
  };



  const saveUser = (values) => {
    const {
      addressType,
      area,
      block,
      cityId,
      description,
      googleId,
      latitude,
      longitude,
      physicalAddress,
      pin,
      status,
      street,
      userId,
      ...rest
    } = values;
    const addresses = [
      {
        addressType,
        area,
        block,
        cityId,
        description,
        googleId,
        latitude,
        longitude,
        physicalAddress,
        pin,
        status,
        street,
        userId
      },
    ];
    addUserMutation.mutate(
      {
        ...rest,
        addresses,
      },
      {
        onSuccess: handleSuccess,
      }
    );
  };


  // const saveUser = (values) => {
  //   addUserMutation.mutate(values, {
  //     onSuccess: handleSuccess,
  //   });
  // };

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
        <UserForm initialValues={initialValues} isAdd={true} handleSubmit={saveUser} />
      </Modal.Body>
    </Modal>
  );
};
