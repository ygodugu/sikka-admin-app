import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CertificationForm } from "./NotificationForm";

const addNotification = (payload) => {
  return axiosInstance.post(`/notifications`, payload);
};

export const AddNotificationModal = ({ handleSuccess, handleClose }) => {
  const addNotificationMutation = useMutation({
    mutationFn: addNotification,
  });
  const initialValues = {
    name: "",
    description: "",
    variables: "",
  };

  const saveNotification = (values) => {
    addNotificationMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Notification Template</Modal.Title>
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
        <CertificationForm
          initialValues={initialValues}
          onSubmit={saveNotification}
        />
      </Modal.Body>
    </Modal>
  );
};
