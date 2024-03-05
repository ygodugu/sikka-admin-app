import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { BusinessCategoriesForm } from "./BusinessCategoriesForm";


const updateBusinessCategories = (payload) => {
  return axiosInstance.put(`/business-categories/${payload.id}`, payload);
};

const getBusinessCategoriesDetails = (id) => {
  return axiosInstance.get(`/business-categories/${id}`).then((res) => res.data);
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

export const EditBusinessCategoriesModal = ({ handleSuccess, handleClose, id }) => {
  const { data: BusinessCategoriesDetails, error } = useQuery({
    queryKey: ["BusinessCategories-details", id],
    queryFn: () => getBusinessCategoriesDetails(id),
  });

  const updateBusinessCategoriesMutation = useMutation({
    mutationFn: updateBusinessCategories,
  });

  const handleUpdateBusinessCategories = (values) => {
    updateBusinessCategoriesMutation.mutate(
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
              handleUpdateBusinessCategories(updatedValues);
            } else {
              console.log("No ID was received");
              handleUpdateBusinessCategories(values);
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
      handleUpdateBusinessCategories(values);
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
  //           handleUpdateBusinessCategories(updatedValues);
  //         } else {
  //           console.log("No ID was received");
  //           handleUpdateBusinessCategories(values);
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
    <>
      {BusinessCategoriesDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit BusinessCategories</Modal.Title>
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
            <BusinessCategoriesForm
              initialValues={BusinessCategoriesDetails}
              onSubmit={handleSubmit}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
