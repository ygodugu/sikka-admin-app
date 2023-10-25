import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CountriesForm } from "./CountriesForm";

const addcountries = (payload) => {
  return axiosInstance.post(`/countries`, payload);
};

export const AddCountriesModal = ({ handleSuccess, handleClose }) => {
  const addcountriesMutation = useMutation({
    mutationFn: addcountries,
  });
  const initialValues = {
    name: "",
    description: "",
    countryCode: "",
    status : ""
  };

  const saveCountries = (values) => {
    addcountriesMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Country</Modal.Title>
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
        <CountriesForm initialValues={initialValues} isAdd={true} handleSubmit={saveCountries} />
      </Modal.Body>
    </Modal>
  );
};
