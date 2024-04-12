import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { EventsForm } from "./EventsForm";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addEvents = (payload) => {
  return axiosInstance.post(`/events`, payload);
};

const uploadAssetsImage = (file) => {
  const formData = new FormData();
  formData.append('file', file)
  formData.append('folderName', 'event')
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


export const AddEventsModal = ({ handleSuccess, handleClose }) => {

  const addEventsMutation = useMutation({
    mutationFn: addEvents,
  });

  const initialValues = {
    name: "",
    eventDate: "",
    eventEndTime: "",
    merchantId: "",
    totalPasses: "",
    utilizedPasses: "",
    merchantId: "",
    url: "",
    merchantId: "",
    description: ""
  };

  const saveEvents = (values) => {
    addEventsMutation.mutate({
      ...values,
    },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  // Function to show toast message
  const showToast = () => {
    toast.error('Please select the Image', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  const handleSubmit = ({ file, ...values }) => {
    console.log("handleSubmit called");
    console.log("file:", file);

    if (!file) {
      showToast();
      return;
    }

    uploadAssetsImage(file)
      .then(result => {
        if (result) {
          const id = result.id;
          if (id) {
            console.log("Received ID:", id);
            const updatedValues = { ...values, fileUploadId: id };
            saveEvents(updatedValues);
          } else {
            console.log("No ID was received");
            saveEvents(values);
          }
        } else {
          console.log("No result from FileUpload");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Event</Modal.Title>
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
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAdd={true}
        />
      </Modal.Body>
    </Modal>
  );
};
