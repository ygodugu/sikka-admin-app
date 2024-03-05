import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { VoucherForm } from "./VoucherForm";

// const updatevoucher = (payload) => {
//   return axiosInstance.put(`/vouchers/${payload.id}`, payload);
// };

const updatevoucher = (payload) => {
  // Get the current date in ISO format
  const currentDate = new Date().toISOString().split('T')[0];

  // Combine the current date with the time value obtained from the GET call
  const validityStartTime = `${currentDate}T${payload.validityStartTime}`;
  const validityEndTime = `${currentDate}T${payload.validityEndTime}`;

  // Update the payload with the combined validityStartTime
  const updatedPayload = {
    ...payload,
    validityStartTime,
    validityEndTime
  };

  return axiosInstance.put(`/vouchers/${payload.id}`, updatedPayload);
};

const getVoucherDetails = (id) => {
  return axiosInstance.get(`/vouchers/${id}`).then((res) => res.data);
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


export const EditVoucherModal = ({ handleSuccess, handleClose, id }) => {
  const { data: voucherDetails } = useQuery({
    queryKey: ["voucher-details", id],
    queryFn: () => getVoucherDetails(id)
  });

  const updateVoucherMutation = useMutation({
    mutationFn: updatevoucher,
  });

  const handleUpdateVoucher = (values) => {
    console.log(values);
    updateVoucherMutation.mutate(
      {
        ...values, id
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
              handleUpdateVoucher(updatedValues);
            } else {
              console.log("No ID was received");
              handleUpdateVoucher(values);
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
      handleUpdateVoucher(values);
    }
  };




  return (
    <>
      {voucherDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Voucher</Modal.Title>
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
              initialValues={voucherDetails}
              onSubmit={handleSubmit}
              isEdit={true}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
