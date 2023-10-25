import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { StatesForm } from "./StatesForm";

const addStates = (payload) => {
  return axiosInstance.post(`/states`, payload);
};

export const AddStatesModal = ({ handleSuccess, handleClose }) => {
  const addstatesMutation = useMutation({
    mutationFn: addStates,
  });
  const initialValues = {
    countryId : "",
    name: "",
    description: "",
    status : ""

  };

  const saveStates = (values) => {
    addstatesMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New State</Modal.Title>
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
        <StatesForm initialValues={initialValues} isAdd={true} handleSubmit={saveStates} />
      </Modal.Body>
    </Modal>
  );
};
