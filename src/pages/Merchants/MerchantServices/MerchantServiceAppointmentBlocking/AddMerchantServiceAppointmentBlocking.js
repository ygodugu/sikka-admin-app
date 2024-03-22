import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../../../axiosInstance";
import { MerchantServiceAppointmentBlockingForm } from "./MerchantServiceAppointmentBlockingForm";

const addMerchantServiceAppointmentBlocking = (payload) => {
    return axiosInstance.post(`/appointment-blocking`, payload);
};

export const AddMerchantServiceAppointmentBlockingModal = ({ handleSuccess, handleClose, merchantUserId, id }) => {
    console.log(merchantUserId);
    const addServicesMutation = useMutation({
        mutationFn: addMerchantServiceAppointmentBlocking,
    });
    const initialValues = {
        note: "",
        userId: merchantUserId,
        startTime: "",
        endTime: "",
        serviceId: id,
        status: ""
    };

    const saveaddMerchantServiceAppointmentBlocking = (values) => {
        addServicesMutation.mutate(values, {
            onSuccess: handleSuccess,
        });
    };

    return (
        <Modal show={true} onHide={handleClose} size="lg">
            <Modal.Header closeButton={false}>
                <Modal.Title>New Service Appointment Blocking</Modal.Title>
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
                <MerchantServiceAppointmentBlockingForm
                    initialValues={initialValues}
                    handleSubmit={saveaddMerchantServiceAppointmentBlocking}
                />
            </Modal.Body>
        </Modal>
    );
};
