import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { IndustriesForm } from "./IndustriesForm";

const updateIndustries = (payload) => {
  return axiosInstance.put(`/industries/${payload.id}`, payload);
};

const getIndustriesDetails = (id) => {
  return axiosInstance.get(`/industries/${id}`).then((res) => res.data);
};

export const EditIndustriesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: IndustriesDetails, error } = useQuery({
    queryKey: ["Industries-details", id],
    queryFn: () => getIndustriesDetails(id),
  });

  const updateIndustriesMutation = useMutation({
    mutationFn: updateIndustries,
  });

  const handleUpdateIndustries = (values) => {
    updateIndustriesMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {IndustriesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Industrie</Modal.Title>
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
            <IndustriesForm
              initialValues={IndustriesDetails}
              handleSubmit={handleUpdateIndustries}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
