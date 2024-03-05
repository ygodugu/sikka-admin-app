import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { UserForm } from "./UserForm";
// import NotFound from "../NotFound";
import React from "react";

const updateUser = (payload) => {
  return axiosInstance.put(`/users/${payload.id}`, payload);
};


// const getUserDetails = (id) => {
//   return axiosInstance.get(`/users/${id}`).then((res) => res.data);
// };

const getUserDetails = (id) => {
  return axiosInstance.get(`/users/${id}`)
    .then((res) => {
      console.log(res.data); // Logging the response data
      return res.data; // Returning the response data
    })
    .catch((error) => {
      console.error('Error fetching user details:', error);
      throw error; // Propagating the error further
    });
};


export const EditUserModal = ({ handleSuccess, handleClose, id }) => {
  const { data: userDetails } = useQuery({
    queryKey: ["user-details", id],
    queryFn: () => getUserDetails(id),
    // select: (data) => {
    //   const { address, ...rest } = data;

    //   const cityId = address[0].cityId;
    //   return {
    //     ...rest,
    //     cityId,
    //   };
    // },
  });

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
  });


  const handleUpdateUser = (values) => {
    const {
      addressType,
      area,
      block,
      cityId,
      description,
      googleId,
      latitude,
      longitude,
      physicalAddress,
      pin,
      status,
      street,
      userId,
      ...rest
    } = values;
    const addresses = [
      {
        addressType,
        area,
        block,
        cityId,
        description,
        googleId,
        latitude,
        longitude,
        physicalAddress,
        pin,
        status,
        street,
        userId: id,
      },
    ];
    updateUserMutation.mutate(
      { ...rest, id, addresses },
      {
        onSuccess: handleSuccess,
      }
    );
  };


  // const handleUpdateUser = (values) => {
  //   // Get the original user details from the useQuery hook
  //   const originalUserDetails = userDetails;

  //   // Create an object to store the changed values
  //   const changedValues = {};

  //   // Compare each field with the original data
  //   if (values.userType !== originalUserDetails.userType) {
  //     changedValues.userType = values.userType;
  //   }

  //   if (values.email !== originalUserDetails.email) {
  //     changedValues.email = values.email;
  //   }

  //   if (values.firstName !== originalUserDetails.firstName) {
  //     changedValues.firstName = values.firstName;
  //   }

  //   if (values.middleName !== originalUserDetails.middleName) {
  //     changedValues.middleName = values.middleName;
  //   }

  //   if (values.lastName !== originalUserDetails.lastName) {
  //     changedValues.lastName = values.lastName;
  //   }

  //   if (values.gender !== originalUserDetails.gender) {
  //     changedValues.email = values.email;
  //   }

  //   if (values.mobileNumber !== originalUserDetails.mobileNumber) {
  //     changedValues.mobileNumber = values.mobileNumber;
  //   }

  //   if (values.alternativeNumber !== originalUserDetails.alternativeNumber) {
  //     changedValues.alternativeNumber = values.alternativeNumber;
  //   }

  //   if (values.shortBio !== originalUserDetails.shortBio) {
  //     changedValues.shortBio = values.shortBio;
  //   }

  //   if (values.motherTongue !== originalUserDetails.motherTongue) {
  //     changedValues.motherTongue = values.motherTongue;
  //   }

  //   if (values.bloodGroup !== originalUserDetails.bloodGroup) {
  //     changedValues.bloodGroup = values.bloodGroup;
  //   }

  //   if (values.dateOfBirth !== originalUserDetails.dateOfBirth) {
  //     changedValues.dateOfBirth = values.dateOfBirth;
  //   }

  //   if (values.anniversaryDate !== originalUserDetails.anniversaryDate) {
  //     changedValues.anniversaryDate = values.anniversaryDate;
  //   }

  //   if (values.religion !== originalUserDetails.religion) {
  //     changedValues.religion = values.religion;
  //   }

  //   // Add other fields as needed

  //   // Check if any values have changed
  //   if (Object.keys(changedValues).length === 0) {
  //     // No changes, you may want to handle this case or show a message
  //     console.log("No changes were made.");
  //   } else {
  //     // Changes detected, update the user with the changed values
  //     updateUserMutation.mutate(
  //       { ...changedValues, id }, // Send only the changed values
  //       {
  //         onSuccess: handleSuccess,
  //       }
  //     );
  //   }
  // };

  // const handleUpdateUser = (values) => {
  //   updateUserMutation.mutate(
  //     { ...values, id },
  //     {
  //       onSuccess: handleSuccess,
  //     }
  //   );
  // };

  // const handleUpdateUser = (values) => {

  //   const originalUserDetails = userDetails;

  //   const changedValues = {};

  //   const fieldsToCompare = [
  //     "userType",
  //     "email",
  //     "firstName",
  //     "middleName",
  //     "lastName",
  //     "gender",
  //     "mobileNumber",
  //     "alternativeNumber",
  //     "shortBio",
  //     "motherTongue",
  //     "bloodGroup",
  //     "dateOfBirth",
  //     "anniversaryDate",
  //     "religion",
  //   ];

  //   for (const fieldName of fieldsToCompare) {
  //     if (values[fieldName] !== originalUserDetails[fieldName]) {
  //       changedValues[fieldName] = values[fieldName];
  //     }
  //   }

  //   if (Object.keys(changedValues).length === 0) {
  //     console.log("No changes were made.");
  //   } else {
  //     updateUserMutation.mutate(
  //       { ...changedValues, id },
  //       {
  //         onSuccess: handleSuccess,
  //       }
  //     );
  //   }
  // };

  return (
    <>
      {userDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit User</Modal.Title>
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
            <UserForm
              initialValues={{ ...userDetails, addresses: [] }}
              handleSubmit={handleUpdateUser}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
