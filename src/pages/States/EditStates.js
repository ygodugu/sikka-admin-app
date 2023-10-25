import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { StatesForm } from "./StatesForm";

const updateStates = (payload) => {
  return axiosInstance.put(`/states/${payload.id}`, payload);
};

const getStatesDetails = (id) => {
  return axiosInstance.get(`/states/${id}`).then((res) => res.data);
};

export const EditStatesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: statesDetails } = useQuery({
    queryKey: ["states-details", id],
    queryFn: () => getStatesDetails(id)
  });

  const updateStatesMutation = useMutation({
    mutationFn: updateStates,
  });

  
  const handleUpdateStates = (values) => {
    updateStatesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {statesDetails && (
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
            <StatesForm
              initialValues={statesDetails}
              handleSubmit={handleUpdateStates}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
