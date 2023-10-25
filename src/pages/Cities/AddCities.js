import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CitiesForm } from "./CitiesForm";

const addCities = (payload) => {
  return axiosInstance.post(`/cities`, payload);
};

export const AddCitiesModal = ({ handleSuccess, handleClose }) => {
  const addCitiesMutation = useMutation({
    mutationFn: addCities,
  });
  const initialValues = {
    stateId : "",
    name: "",
    description: "",
    status : ""
  };

  const saveCities = (values) => {
    addCitiesMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New City</Modal.Title>
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
        <CitiesForm initialValues={initialValues} isAdd={true} handleSubmit={saveCities} />
      </Modal.Body>
    </Modal>
  );
};
