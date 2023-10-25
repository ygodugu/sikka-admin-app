import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CountriesForm } from "./CountriesForm";

const updateCountries = (payload) => {
  return axiosInstance.put(`/countries/${payload.id}`, payload);
};

const getCountriesDetails = (id) => {
  return axiosInstance.get(`/countries/${id}`).then((res) => res.data);
};

export const EditCountriesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: countriesDetails } = useQuery({
    queryKey: ["ountries-details", id],
    queryFn: () => getCountriesDetails(id)
  });

  const updateCountriesMutation = useMutation({
    mutationFn: updateCountries,
  });

  
  const handleUpdateCountries = (values) => {
    updateCountriesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {countriesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Country</Modal.Title>
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
            <CountriesForm
              initialValues={countriesDetails}
              handleSubmit={handleUpdateCountries}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
