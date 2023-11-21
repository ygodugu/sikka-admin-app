import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from 'react-bootstrap/Modal'
import { axiosInstance } from "../../axiosInstance"
import { CertificationForm } from "./NotificationForm"

const updateNotification = (payload) => {
    return axiosInstance.put(`/notifications/${payload.id}`, payload)
}

const getNotificationDetails = (id) => {
    return axiosInstance.get(`/notifications/${id}`).then(res => res.data)
}


export const EditNotificationModal = ({ handleSuccess, handleClose, id }) => {

    const {
        data: notificationDetails,
    } = useQuery({
        queryKey: ['notification-details', id],
        queryFn: () => getNotificationDetails(id),
    })

    const updateNotificationMutation = useMutation({
        mutationFn: updateNotification
    })


    const handleUpdateNotification = (values) => {
        updateNotificationMutation.mutate({ ...values, id }, {
            onSuccess: handleSuccess
        })
    }

    return (
        <>
            {notificationDetails && <Modal show={true} onHide={handleClose} size="lg">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Edit Notification Template</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <CertificationForm initialValues={notificationDetails} onSubmit={handleUpdateNotification} />
                </Modal.Body>
            </Modal>}
        </>
    );
}