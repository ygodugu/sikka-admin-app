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
    voucherCode: "",
    voucherValue: "",
    name: "",
    consumedCount: "",
    maxUsageCount: "",
    restrictUsageForUser: true,
    description: "",
    validityEndDate: "",
    validityStartDate: "",
    voucherValueType: "",
  };

  const saveVoucher = (values) => {
    addUserMutation.mutate(
      {
        ...values,
        categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        merchantId: "ac875cbe-c8bd-4bf0-8561-6bb2db23372c",
      },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  const handleSubmit = ({ file, ...values }) => {
    console.log("handleSubmit called");
    console.log("file:", file);

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
        />
      </Modal.Body>
    </Modal>
  );
};
