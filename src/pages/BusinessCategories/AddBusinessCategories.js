import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { BusinessCategoriesForm } from "./BusinessCategoriesForm";

const addBusinessCategories = (payload) => {
  return axiosInstance.post(`/business-categories`, payload);
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
        documentId: "953b775a-2501-4965-9dce-10353b878292",
        fileName: response.data.fileName,
        filePath: response.data.url,
        folderName: "business_category"
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

export const AddBusinessCategoriesModal = ({ handleSuccess, handleClose }) => {
  const addBusinessCategoriesMutation = useMutation({
    mutationFn: addBusinessCategories,
  });
  const initialValues = {
    name: "",
    description: "",
    rank: "",
    status: ""
  };


  const saveBusinessCategories = (values) => {
    addBusinessCategoriesMutation.mutate(
      {
        ...values,
      },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  // const saveBusinessCategories = (values) => {
  //   addBusinessCategoriesMutation.mutate(values, {
  //     onSuccess: handleSuccess,
  //   });
  // };


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
              saveBusinessCategories(updatedValues);
            } else {
              console.log("No ID was received");
              saveBusinessCategories(values);
            }
          } else {
            console.log("No result from FileUpload");
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    } else if (!file) {
      console.log("Adding demo ID:");
      const updatedValues = { ...values, logoId: "2b962d4d-1050-4190-ad18-7d3491c3a0fe" };
      saveBusinessCategories(updatedValues);
    }
    else {
      // If no file is selected, directly update the business category
      saveBusinessCategories(values);
    }
  };


  // const handleSubmit = ({ file, ...values }) => {
  //   console.log("handleSubmit called");
  //   console.log("file:", file);

  //   uploadAssetsImage(file)
  //     .then(result => {
  //       if (result) {
  //         const id = result.id;
  //         if (id) {
  //           console.log("Received ID:", id);
  //           const updatedValues = { ...values, logoId: id };
  //           saveBusinessCategories(updatedValues);
  //         } else {
  //           console.log("No ID was received");
  //           saveBusinessCategories(values);
  //         }
  //       } else {
  //         console.log("No result from FileUpload");
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error:", error);
  //     });
  // };


  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New BusinessCategories</Modal.Title>
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
        <BusinessCategoriesForm initialValues={initialValues} isAdd={true} onSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
};
