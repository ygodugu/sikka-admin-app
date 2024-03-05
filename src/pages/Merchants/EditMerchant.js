import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { MerchantForm } from "./MerchantForm";

const updateMerchant = (payload) => {
  return axiosInstance.put(`/merchants/${payload.id}`, payload);
};

const getMerchantDetails = (id) => {
  return axiosInstance.get(`/merchants/${id}`).then((res) => res.data);
};


const uploadAssetsImage = (file) => {
  const formData = new FormData();
  formData.append('file', file)
  formData.append('folderName', 'merchant')
  return axiosInstance.post(`/files/file-upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      const dataToSend = {
        documentId: "953b775a-2501-4965-9dce-10353b878292",
        fileName: response.data.fileName,
        filePath: response.data.url,
        folderName: "merchant"
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


export const EditMerchantModal = ({ handleSuccess, handleClose, id }) => {
  const { data: merchantDetails } = useQuery({
    queryKey: ["merchant-details", id],
    queryFn: () => getMerchantDetails(id),
  });

  const updateMerchantMutation = useMutation({
    mutationFn: updateMerchant,
  });

  const handleUpdateUser = (values) => {
    updateMerchantMutation.mutate(
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
              handleUpdateUser(updatedValues);
            } else {
              console.log("No ID was received");
              handleUpdateUser(values);
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
      handleUpdateUser(values);
    }
  };


  return (
    <>
      {merchantDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Merchant</Modal.Title>
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
            <MerchantForm
              initialValues={merchantDetails}
              onSubmit={handleSubmit}
              isEdit={true}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
