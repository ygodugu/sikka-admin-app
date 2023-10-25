import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { EventsForm } from "./EventsForm";

const updateEvents = (payload) => {
  return axiosInstance.put(`/events/${payload.id}`, payload);
};

const getEventsDetails = (id) => {
  return axiosInstance.get(`/events/${id}`).then((res) => res.data);
};

export const EditEventsModal = ({ handleSuccess, handleClose, id }) => {
  const { data: eventDetails } = useQuery({
    queryKey: ["event-details", id],
    queryFn: () => getEventsDetails(id)
  });

  const updateEventsMutation = useMutation({
    mutationFn: updateEvents,
  });

  
  const handleUpdateEvents = (values) => {
    updateEventsMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {eventDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Event</Modal.Title>
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
            <EventsForm
              initialValues={eventDetails}
              onSubmit={handleUpdateEvents}
              isEdit={true}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
