import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { ServicesForm } from "./ServicesForm";

const addServices = (payload) => {
    return axiosInstance.post(`/services`, payload);
};

export const AddServicesModal = ({ handleSuccess, handleClose }) => {
    const addServicesMutation = useMutation({
        mutationFn: addServices,
    });
    const initialValues = {
        fileId: "",
        id: "",
        merchantUserId: "",
        name: "",
        duration: "",
        description: "",
        status: ""
    };

    const saveServices = (values) => {
        addServicesMutation.mutate(values, {
            onSuccess: handleSuccess,
        });
    };

    return (
        <Modal show={true} onHide={handleClose} size="lg">
            <Modal.Header closeButton={false}>
                <Modal.Title>New Service</Modal.Title>
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
                <ServicesForm
                    initialValues={initialValues}
                    handleSubmit={saveServices}
                />
            </Modal.Body>
        </Modal>
    );
};
