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


const uploadAssetsImage = (file) => {
  const formData = new FormData();
  formData.append('file', file)
  formData.append('folderName', 'business_category')
  return axiosInstance.post(`/files/file-upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      const dataToSend = {
        documentId: "4c4cfe59-d390-479e-ad9b-1917ea2b5b2e",
        fileName: response.data.fileName,
        filePath: response.data.url,
        folderName: "event"
      };
      return FileUpload(dataToSend);
    })
};

const FileUpload = (dataToSend) => {
  return axiosInstance.post('/file-uploads', dataToSend)
    .then(response => {
      console.log("Full response from FileUpload:", response.data);
      const id = response.data.id;
      console.log("ID received from FileUpload:", id);
      if (id) {
        return { id, response: response.data };
      } else {
        throw new Error("No ID was received from FileUpload");
      }
    });
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

  const handleSubmit = ({ file, ...values }) => {
    console.log("handleSubmit called");
    console.log("file:", file);

    if (file) {
      // If a file is selected, upload the image and then update the business category
      uploadAssetsImage(file)
        .then(result => {
          if (result) {
            const id = result.id;
            if (id) {
              console.log("Received ID:", id);
              const updatedValues = { ...values, logoId: id };
              handleUpdateEvents(updatedValues);
            } else {
              console.log("No ID was received");
              handleUpdateEvents(values);
            }
          } else {
            console.log("No result from FileUpload");
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    } else {
      // If no file is selected, directly update the business category
      handleUpdateEvents(values);
    }
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
              onSubmit={handleSubmit}
              isEdit={true}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
