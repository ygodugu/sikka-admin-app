import React from 'react';
import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { VoucherForm } from "./VoucherForm"


const addVoucher = (payload) => {
  return axiosInstance.post(`/vouchers`, payload);
};

const uploadAssetsImage = (file) => {
  const formData = new FormData();
  formData.append('file', file)
  formData.append('folderName', 'merchant_offer')
  return axiosInstance.post(`/files/file-upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      const dataToSend = {
        documentId: "b1ed4fc9-ec83-491d-b669-07806177eae7",
        fileName: response.data.fileName,
        filePath: response.data.url,
        folderName: "merchant_offer"
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

export const AddVoucherModal = ({ handleSuccess, handleClose }) => {

  const addUserMutation = useMutation({
    mutationFn: addVoucher,
  });

  const initialValues = {
    merchantId:"",
    categoryId: "",
    voucherCode: "",
    voucherValue: "",
    rank: "",
    name: "",
    consumedCount: "",
    maxUsageCount: "",
    restrictUsageForUser: false,
    description: "",
    validityEndDate: "",
    validityStartDate: "",
    voucherValueType: "",
    status: ""
  };

  const saveVoucher = (values) => {
    addUserMutation.mutate(
      {
        ...values,
      },
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
              const updatedValues = { ...values, voucherAssetId: id };
              saveVoucher(updatedValues);
            } else {
              console.log("No ID was received");
              saveVoucher(values);
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
      const updatedValues = { ...values, voucherAssetId: "2b962d4d-1050-4190-ad18-7d3491c3a0fe" };
      saveVoucher(updatedValues);
    }
    else {
      // If no file is selected, directly update the business category
      saveVoucher(values);
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
  //           const updatedValues = { ...values, voucherAssetId: id };
  //           saveVoucher(updatedValues);
  //         } else {
  //           console.log("No ID was received");
  //           saveVoucher(values);
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
        <Modal.Title>New Voucher</Modal.Title>
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
        <VoucherForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAdd={true}
        />
      </Modal.Body>
    </Modal>
  );
};
