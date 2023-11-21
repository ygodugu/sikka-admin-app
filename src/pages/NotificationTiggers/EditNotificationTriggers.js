import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from 'react-bootstrap/Modal'
import { axiosInstance } from "../../axiosInstance"
import { NotificationTriggerForm } from "./NotificationTriggersForm";

const updateNotificationTrigger = (payload) => {
    return axiosInstance.put(`/notifications/${payload.id}`, payload)
}

const getNotificationTriggerDetails = (id) => {
    return axiosInstance.get(`/notifications/${id}`).then(res => res.data)
}


export const EditNotificationTriggerModal = ({ handleSuccess, handleClose, id }) => {

    const {
        data: notificationTriggerDetails,
    } = useQuery({
        queryKey: ['notification-details', id],
        queryFn: () => getNotificationTriggerDetails(id),
    })

    const updateNotificationTriggerMutation = useMutation({
        mutationFn: updateNotificationTrigger
    })


    const handleUpdateNotificationTrigger = (values) => {
        updateNotificationTriggerMutation.mutate({ ...values, id }, {
            onSuccess: handleSuccess
        })
    }

    return (
        <>
            {notificationTriggerDetails && <Modal show={true} onHide={handleClose} size="lg">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Edit Notification Template</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <NotificationTriggerForm initialValues={notificationTriggerDetails} onSubmit={handleUpdateNotificationTrigger} />
                </Modal.Body>
            </Modal>}
        </>
    );
}