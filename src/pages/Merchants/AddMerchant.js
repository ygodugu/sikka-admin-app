import React from 'react';
import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { MerchantForm } from "./MerchantForm";

const addMerchant = (payload) => {
  return axiosInstance.post(`/merchants`, payload);
};

export const AddMerchantModal = ({ handleSuccess, handleClose }) => {
  const addMerchantMutation = useMutation({
    mutationFn: addMerchant,
  });
  const initialValues = {
    abn: "",
    acn: "",
    businessLegalName: "",
    businessStructure: "",
    dateOfOperation: "",
    dateOfRegistration: "",
    description: "",
    facebookUrl: "",
    instagramUrl: "",
    merchantCikkaTransactionDefaultPercentage: 0,
    merchantType: "",
    operationsInAWeek: 0,
    ownerEmail: "",
    ownerMobile: "",
    ownerName: "",
    phoneNumber: "",
    representativeDesignation: "",
    representativeEmail: "",
    representativeMobile: "",
    representativeName: "",
    status: 0,
    taxFileNumber: "",
    tradeName: "",
    website: ""
  };

  const saveUser = (values) => {
    addMerchantMutation.mutate(
      {
        ...values,
        userId: "58bf45d9-de52-4fd9-b265-a2e33145c88a",
        industryId: "94e2b3ff-a701-4d1b-98bd-bba921cbd11b",
        businessCategoryId: "76ff3ebe-f8f3-41e1-bf4d-f001b1fc15e8",
        logoId: "6fa8835f-5dea-46b7-bbd1-12e6b983f876",
        squareLogoId : "233fc20e-62cf-45f5-a576-6fa65a18c712",
      },
      {
        onSuccess: handleSuccess,
      });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New User</Modal.Title>
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
        <MerchantForm initialValues={initialValues} handleSubmit={saveUser} />
      </Modal.Body>
    </Modal>
  );
};
