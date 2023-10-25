import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { DocumentsForm } from "./DocumentsForm";

const updateDocuments = (payload) => {
  return axiosInstance.put(`/documents/${payload.id}`, payload);
};

const getDocumentsDetails = (id) => {
  return axiosInstance.get(`/documents/${id}`).then((res) => res.data);
};

export const EditDocumentsModal = ({ handleSuccess, handleClose, id }) => {
  const { data: documentsDetails } = useQuery({
    queryKey: ["documents-details", id],
    queryFn: () => getDocumentsDetails(id)
  });

  const updateDocumentsMutation = useMutation({
    mutationFn: updateDocuments,
  });

  
  const handleUpdateDocuments = (values) => {
    updateDocumentsMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {documentsDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Document</Modal.Title>
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
            <DocumentsForm
              initialValues={documentsDetails}
              handleSubmit={handleUpdateDocuments}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
