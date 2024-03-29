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


const uploadAssetsImage = (file1) => {
  const formData = new FormData();
  formData.append('file', file1)
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



const uploadAssetsImageSquareLogo = (file2) => {
  const formData = new FormData();
  formData.append('file', file2)
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
      return FileUploadSquareLogo(dataToSend);
    })
};

const FileUploadSquareLogo = (dataToSend) => {
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


  const handleSubmit = ({ file1, file2, ...values }) => {
    console.log("handleSubmit called");
    console.log("file:", file1);
    console.log("file:", file2);

    //   if (file1) {
    //     // If a file is selected, upload the image and then update the business category
    //     uploadAssetsImage(file1)
    //       .then(result => {
    //         if (result) {
    //           const id = result.id;
    //           if (id) {
    //             console.log("Received ID:", id);
    //             const updatedValues = { ...values, logoId: id };
    //             handleUpdateUser(updatedValues);
    //           } else {
    //             console.log("No ID was received");
    //             handleUpdateUser(values);
    //           }
    //         } else {
    //           console.log("No result from FileUpload");
    //         }
    //       })
    //       .catch(error => {
    //         console.error("Error:", error);
    //       });
    //   } else {
    //     // If no file is selected, directly update the business category
    //     handleUpdateUser(values);
    //   }
    // };

    if (file1) {
      // If a file is selected, upload the first image
      uploadAssetsImage(file1)
        .then(result1 => {
          if (result1 && result1.id) {
            console.log("Received ID for file1:", result1.id);
            // If file1 upload successful, check if file2 is present
            if (file2) {
              // If file2 is present, upload the second image
              uploadAssetsImageSquareLogo(file2)
                .then(result2 => {
                  if (result2 && result2.id) {
                    console.log("Received ID for file2:", result2.id);
                    // If file2 upload successful, update values with both file IDs
                    const updatedValues = { ...values, logoId: result1.id, squareLogoId: result2.id };
                    handleUpdateUser(updatedValues);
                  } else {
                    console.log("No ID was received for file2");
                    // If file2 upload fails, update values with only file1 ID
                    const updatedValues = { ...values, logoId: result1.id };
                    handleUpdateUser(updatedValues);
                  }
                })
                .catch(error => {
                  console.error("Error uploading file2:", error);
                });
            } else {
              // If no file2 is selected, update values with only file1 ID
              const updatedValues = { ...values, logoId: result1.id };
              handleUpdateUser(updatedValues);
            }
          } else {
            console.log("No ID was received for file1");
            handleUpdateUser(values);
          }
        })
        .catch(error => {
          console.error("Error uploading file1:", error);
        });
    } else {
      // If no file1 is selected, check for file2
      if (file2) {
        // If file2 is present, upload the second image
        uploadAssetsImageSquareLogo(file2)
          .then(result2 => {
            if (result2 && result2.id) {
              console.log("Received ID for file2:", result2.id);
              // If file2 upload successful, update values with only file2 ID
              const updatedValues = { ...values, squareLogoId: result2.id };
              handleUpdateUser(updatedValues);
            } else {
              console.log("No ID was received for file2");
              handleUpdateUser(values);
            }
          })
          .catch(error => {
            console.error("Error uploading file2:", error);
          });
      } else {
        // If neither file1 nor file2 is selected, update values without any file IDs
        handleUpdateUser(values);
      }
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
