import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { NotificationTriggerForm } from "./NotificationTriggersForm";

const addNotificationTrigger = (payload) => {
  return axiosInstance.post(`/notifications`, payload);
};

export const AddNotificationTriggerModal = ({ handleSuccess, handleClose }) => {
  const addNotificationTriggerMutation = useMutation({
    mutationFn: addNotificationTrigger,
  });
  const initialValues = {
    name: "",
    description: "",
    variables: "",
  };

  const saveNotificationTrigger = (values) => {
    addNotificationTriggerMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Notification Trigger</Modal.Title>
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
        <NotificationTriggerForm
          initialValues={initialValues}
          onSubmit={saveNotificationTrigger}
        />
      </Modal.Body>
    </Modal>
  );
};
