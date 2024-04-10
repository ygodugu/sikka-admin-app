import React from 'react';
import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { axiosInstance } from "../../axiosInstance";
import { MerchantForm } from "./MerchantForm";


const adduser = (payload) => {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/sign-up`, payload)
};

const loginUser = (payload) => {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/sign-in`, payload)
};


const addMerchant = (payload) => {
  return axiosInstance.post(`/merchants`, payload);
};

export const AddMerchantModal = ({ handleSuccess, handleClose }) => {
  const addMerchantMutation = useMutation({
    mutationFn: addMerchant,
  });
  const initialValues = {
    businessCategoryId: "",
    industryId: "",
    anniversaryDate: "",
    joiningDate: "",
    dateOfBirth: "",
    profileImagePath: "string",
    proofNumber: "string",
    proofPath: "string",
    shortBio: "string",
    isTest: true,
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    religion: "",
    userType: "",
    categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    cityId: "8734741e-3d92-4147-b74e-2f26d659fc3a",

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
    taxFileNumber: "",
    tradeName: "",
    website: "",
    latitude: "",
    longitude: "",
    rank: "",
    status: ""
  };


  // const saveUser = (values) => {
  //   addMerchantMutation.mutate(
  //     {
  //       ...values,
  //       userId: "58bf45d9-de52-4fd9-b265-a2e33145c88a",
  //       industryId: "94e2b3ff-a701-4d1b-98bd-bba921cbd11b",
  //       businessCategoryId: "76ff3ebe-f8f3-41e1-bf4d-f001b1fc15e8",
  //       logoId: "6fa8835f-5dea-46b7-bbd1-12e6b983f876",
  //       squareLogoId: "233fc20e-62cf-45f5-a576-6fa65a18c712",
  //     },
  //     {
  //       onSuccess: handleSuccess,
  //     });
  // };


  // const saveUser = (values) => {
  //   const {
  //     alternativeNumber,
  //     anniversaryDate,
  //     joiningDate,
  //     bloodGroup,
  //     dateOfBirth,
  //     motherTongue,
  //     profileImagePath,
  //     proofNumber,
  //     proofPath,
  //     shortBio,
  //     isTest,
  //     email,
  //     firstName,
  //     gender,
  //     lastName,
  //     middleName,
  //     mobileNumber,
  //     password,
  //     religion,
  //     userType,
  //     categoryId,
  //     cityId,
  //     ...rest
  //   } = values;

  //   const signUpPayload = {
  //     alternativeNumber,
  //     anniversaryDate,
  //     joiningDate,
  //     bloodGroup,
  //     dateOfBirth,
  //     motherTongue,
  //     profileImagePath,
  //     proofNumber,
  //     proofPath,
  //     email,
  //     shortBio,
  //     isTest,
  //     firstName,
  //     gender,
  //     lastName,
  //     middleName,
  //     mobileNumber,
  //     password,
  //     religion,
  //     userType,
  //     categoryId,
  //     cityId,
  //   };


  //   adduser(signUpPayload)
  //     .then(response => {
  //       console.log('Sign-up successful:', response);

  //       // Once sign-up is successful, proceed with sign-in
  //       const signInPayload = {
  //         email,
  //         password,
  //       };

  //       // Call the sign-in API
  //       loginUser(signInPayload)
  //         .then(signInResponse => {
  //           console.log('Sign-in successful:', signInResponse);
  //           // Handle sign-in success here
  //           // Proceed with other actions if needed
  //         })
  //         .catch(signInError => {
  //           console.error('Sign-in error:', signInError);
  //           // Handle sign-in error
  //         });
  //     })
  //     .catch(signUpError => {
  //       console.error('Sign-up error:', signUpError);
  //       // Handle sign-up error
  //     });
  // };

  // fist change 

  // const saveUser = (values) => {
  //   const {
  //     alternativeNumber,
  //     anniversaryDate,
  //     joiningDate,
  //     bloodGroup,
  //     dateOfBirth,
  //     motherTongue,
  //     profileImagePath,
  //     proofNumber,
  //     proofPath,
  //     shortBio,
  //     isTest,
  //     email,
  //     firstName,
  //     gender,
  //     lastName,
  //     middleName,
  //     mobileNumber,
  //     password,
  //     religion,
  //     userType,
  //     categoryId,
  //     cityId,
  //     ...rest
  //   } = values;

  //   const signUpPayload = {
  //     alternativeNumber,
  //     anniversaryDate,
  //     joiningDate,
  //     bloodGroup,
  //     dateOfBirth,
  //     motherTongue,
  //     profileImagePath,
  //     proofNumber,
  //     proofPath,
  //     email,
  //     shortBio,
  //     isTest,
  //     firstName,
  //     gender,
  //     lastName,
  //     middleName,
  //     mobileNumber,
  //     password,
  //     religion,
  //     userType,
  //     categoryId,
  //     cityId,
  //   };

  //   adduser(signUpPayload)
  //     .then(signUpResponse => {
  //       console.log('Sign-up successful:', signUpResponse);

  //       const signInPayload = {
  //         email,
  //         password,
  //       };

  //       loginUser(signInPayload)
  //         .then(signInResponse => {
  //           console.log('Sign-in successful:', signInResponse);

  //           addMerchantMutation.mutate(
  //             {
  //               ...rest,
  //               userId: signInResponse.data.user.id,
  //               industryId: "94e2b3ff-a701-4d1b-98bd-bba921cbd11b",
  //               businessCategoryId: "76ff3ebe-f8f3-41e1-bf4d-f001b1fc15e8",
  //               logoId: "6fa8835f-5dea-46b7-bbd1-12e6b983f876",
  //               squareLogoId: "233fc20e-62cf-45f5-a576-6fa65a18c712",
  //             },
  //             {
  //               onSuccess: (merchantResponse) => {
  //                 console.log('Merchant creation successful:', merchantResponse);
  //                 handleSuccess(merchantResponse);
  //               },
  //             }
  //           );
  //         })
  //         .catch(signInError => {
  //           console.error('Sign-in error:', signInError);
  //           // Handle sign-in error
  //         });
  //     })
  //     .catch(signUpError => {
  //       console.error('Sign-up error:', signUpError);
  //       // Handle sign-up error
  //     });
  // };

  // second change

  const saveUser = (values) => {
    const { userId, ...rest } = values;

    if (userId) {
      // User already exists, directly create merchant with specific values
      addMerchantMutation.mutate(
        {
          abn: values.abn,
          acn: values.acn,
          authRequestSignatureId: values.authRequestSignatureId,
          businessCategoryId: values.businessCategoryId,
          businessLegalName: values.businessLegalName,
          businessStructure: values.businessStructure,
          dateOfOperation: values.dateOfOperation,
          dateOfRegistration: values.dateOfRegistration,
          description: values.description,
          facebookUrl: values.facebookUrl,
          industryId: values.industryId,
          instagramUrl: values.instagramUrl,
          latitude: values.latitude,
          logoId: values.logoId,
          longitude: values.longitude,
          merchantCikkaTransactionDefaultPercentage: values.merchantCikkaTransactionDefaultPercentage,
          merchantPartnerInterest: values.merchantPartnerInterest,
          merchantType: values.merchantType,
          operationsInAWeek: values.operationsInAWeek,
          ownerEmail: values.ownerEmail,
          ownerMobile: values.ownerMobile,
          ownerName: values.ownerName,
          phoneNumber: values.phoneNumber,
          rank: values.rank,
          representativeDesignation: values.representativeDesignation,
          representativeEmail: values.representativeEmail,
          representativeMobile: values.representativeMobile,
          representativeName: values.representativeName,
          squareLogoId: values.squareLogoId,
          status: values.status,
          taxFileNumber: values.taxFileNumber,
          tradeName: values.tradeName,
          userId: values.userId[0].id,
          website: values.website,
          squareLogoId: "233fc20e-62cf-45f5-a576-6fa65a18c712",
          logoId: "6fa8835f-5dea-46b7-bbd1-12e6b983f876"
        },
        {
          onSuccess: (merchantResponse) => {
            console.log('Merchant creation successful:', merchantResponse);
            handleSuccess(merchantResponse);
          },
        }
      );
    } else {
      // User doesn't exist, proceed with sign-up and sign-in
      const {
        alternativeNumber,
        anniversaryDate,
        joiningDate,
        bloodGroup,
        dateOfBirth,
        motherTongue,
        profileImagePath,
        proofNumber,
        proofPath,
        shortBio,
        isTest,
        email,
        firstName,
        gender,
        lastName,
        middleName,
        mobileNumber,
        password,
        religion,
        userType,
        categoryId,
        cityId,
      } = values;

      const signUpPayload = {
        alternativeNumber,
        anniversaryDate,
        joiningDate,
        bloodGroup,
        dateOfBirth,
        motherTongue,
        profileImagePath,
        proofNumber,
        proofPath,
        email,
        shortBio,
        isTest,
        firstName,
        gender,
        lastName,
        middleName,
        mobileNumber,
        password,
        religion,
        userType,
        categoryId,
        cityId,
      };

      adduser(signUpPayload)
        .then(signUpResponse => {
          console.log('Sign-up successful:', signUpResponse);

          const signInPayload = {
            email,
            password,
          };

          loginUser(signInPayload)
            .then(signInResponse => {
              console.log('Sign-in successful:', signInResponse);

              addMerchantMutation.mutate(
                {
                  ...rest,
                  userId: signInResponse.data.user.id,
                  industryId: "94e2b3ff-a701-4d1b-98bd-bba921cbd11b",
                  businessCategoryId: "76ff3ebe-f8f3-41e1-bf4d-f001b1fc15e8",
                  logoId: "6fa8835f-5dea-46b7-bbd1-12e6b983f876",
                  squareLogoId: "233fc20e-62cf-45f5-a576-6fa65a18c712",
                },
                {
                  onSuccess: (merchantResponse) => {
                    console.log('Merchant creation successful:', merchantResponse);
                    handleSuccess(merchantResponse);
                  },
                }
              );
            })
            .catch(signInError => {
              console.error('Sign-in error:', signInError);
              // Handle sign-in error
            });
        })
        .catch(signUpError => {
          console.error('Sign-up error:', signUpError);
          // Handle sign-up error
        });
    }
  };


  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Merchant</Modal.Title>
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
        <MerchantForm initialValues={initialValues} isAdd={true} onSubmit={saveUser} />
      </Modal.Body>
    </Modal>
  );
};
