import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CitiesForm } from "./CitiesForm";

const updateCities = (payload) => {
  return axiosInstance.put(`/cities/${payload.id}`, payload);
};

const getCitiesDetails = (id) => {
  return axiosInstance.get(`/cities/${id}`).then((res) => res.data);
};

export const EditCitiesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: citiesDetails } = useQuery({
    queryKey: ["cities-details", id],
    queryFn: () => getCitiesDetails(id)
  });

  const updateCitiesMutation = useMutation({
    mutationFn: updateCities,
  });

  
  const handleUpdateCities = (values) => {
    updateCitiesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {citiesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit city</Modal.Title>
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
            <CitiesForm
              initialValues={citiesDetails}
              handleSubmit={handleUpdateCities}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
