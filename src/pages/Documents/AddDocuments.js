import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { DocumentsForm } from "./DocumentsForm";

const addDocuments = (payload) => {
  return axiosInstance.post(`/documents`, payload);
};

export const AddDocumentsModal = ({ handleSuccess, handleClose }) => {
  const addDocumentsMutation = useMutation({
    mutationFn: addDocuments,
  });
  const initialValues = {
    name: "",
    description: "",
    status : ""
  };

  const saveDocuments = (values) => {
    addDocumentsMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Document</Modal.Title>
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
        <DocumentsForm initialValues={initialValues} isAdd={true} handleSubmit={saveDocuments} />
      </Modal.Body>
    </Modal>
  );
};
