import React, { useState } from 'react';
import { useFormik } from "formik";
import { object, string } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

let eventsSchema = object({
    name: string().required("Name is required"),
    merchantId: string().required("merchantId is required"),
});

export const EventsForm = ({ initialValues, onSubmit, isEdit = false, isAdd = false }) => {

    const [file, setFile] = useState();

    const handleSubmit = (values, { validateForm }) => {
        validateForm(values).then(res => {

            const eventStartTime = values.eventStartTime ? `${new Date(values.eventDate).toISOString().split('T')[0]}T${values.eventStartTime}:00.000Z` : '';
            const eventEndTime = values.eventEndTime ? `${new Date(values.eventEndDate).toISOString().split('T')[0]}T${values.eventEndTime}:00.000Z` : '';

            onSubmit({ ...values, file, eventStartTime, eventEndTime });
        });
    }

    const handleFileSelect = (event) => {
        setFile(event.target.files[0])
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: eventsSchema,
    });


    const modifyImageUrl = (originalUrl, folderName) => {
        let parts = originalUrl.split('?');
        let fileName = parts[1].split('=')[1];
        let newUrl = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

        return newUrl;
    };


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <aside className="col-md-4">
                    <div className="form-group">
                        <label for="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                        />
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="merchantId">merchantId *</label>
                        <input
                            type="text"
                            id="merchantId"
                            value={formik.values.merchantId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter merchantId"
                        />
                        <div className="invalid-feedback">{formik.errors.merchantId}</div>
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label for="totalPasses">TotalPasses</label>
                        <input
                            type="number"
                            id="totalPasses"
                            value={formik.values.totalPasses}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter totalPasses"
                        />
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label for="url">url</label>
                        <input
                            type="text"
                            id="url"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter url"
                        />
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label for="utilizedPasses">UtilizedPasses</label>
                        <input
                            type="number"
                            id="utilizedPasses"
                            value={formik.values.utilizedPasses}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter description"
                        />
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter description"
                        />
                    </div>
                </aside>

                {/* <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="eventDate">EventDate *</label>
                        <DatePicker
                            selected={
                                formik.values.eventDate
                                    ? new Date(formik.values.eventDate)
                                    : null
                            }
                            onChange={(e) => {
                                formik.setFieldValue("eventDate", e);
                                formik.setFieldTouched("eventDate");
                            }}
                            className="form-control"
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <div className="invalid-feedback">{formik.errors.eventDate}</div>
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="eventEndDate">EventEndDate</label>
                        <DatePicker
                            selected={
                                formik.values.eventEndDate
                                    ? new Date(formik.values.eventEndDate)
                                    : null
                            }
                            onChange={(e) => {
                                formik.setFieldValue("eventEndDate", e);
                                formik.setFieldTouched("eventEndDate");
                            }}
                            showTimeSelect
                            className="form-control"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                </aside> */}

                {/* 
                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventDate">EventDate *</label>
                        <input
                            type="datetime-local"
                            id="eventDate"
                            value={formik.values.eventDate ? new Date(formik.values.eventDate).toISOString().slice(0, 16) : ''}
                            onChange={(e) => {
                                const isoDateTime = e.target.value + ":00.000Z";
                                formik.setFieldValue("eventDate", isoDateTime);
                                formik.setFieldTouched("eventDate", true);
                            }}
                            onBlur={formik.handleBlur}
                            className={`form-control form-control-lg ${formik.touched.eventDate && formik.errors.eventDate ? 'is-invalid' : ''}`}
                            placeholder="Enter Date Time"
                        />
                        {formik.touched.eventDate && formik.errors.eventDate && (
                            <div className="invalid-feedback">{formik.errors.eventDate}</div>
                        )}
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventEndDate">EventEndDate</label>
                        <input
                            type="datetime-local"
                            id="eventEndDate"
                            value={formik.values.eventEndDate ? new Date(formik.values.eventEndDate).toISOString().slice(0, 16) : ''}
                            onChange={(e) => {
                                const isoDateTime = e.target.value + ":00.000Z";
                                formik.setFieldValue("eventEndDate", isoDateTime);
                                formik.setFieldTouched("eventEndDate", true);
                            }}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter event End Date Time"
                        />
                    </div>
                </aside> */}

                {/* <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventDate">EventDate *</label>
                        <input
                            type="date"
                            id="eventDate"
                            value={formik.values.eventDate}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter Date Time"
                        />
                    </div>
                </aside> */}

                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventDate">EventDate *</label>
                        <DatePicker
                            selected={
                                formik.values.eventDate
                                    ? new Date(formik.values.eventDate)
                                    : null
                            }
                            onChange={(e) => {
                                formik.setFieldValue("eventDate", e);
                                formik.setFieldTouched("eventDate");
                            }}
                            className="form-control"
                        />
                        <div className="invalid-feedback">{formik.errors.eventDate}</div>
                    </div>
                </aside>



                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventStartTime">eventStartTime  *</label>
                        <input
                            type="time"
                            id="eventStartTime"
                            value={formik.values.eventStartTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter eventStartTime"
                        />
                    </div>
                </aside>

                {/* <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventEndDate">eventEndDate</label>
                        <input
                            type="date"
                            id="eventEndDate"
                            value={formik.values.eventEndDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter Date Time"
                        />
                    </div>
                </aside> */}

                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventEndDate">EventEndDate</label>
                        <DatePicker
                            selected={
                                formik.values.eventEndDate
                                    ? new Date(formik.values.eventEndDate)
                                    : null
                            }
                            onChange={(e) => {
                                formik.setFieldValue("eventEndDate", e);
                                formik.setFieldTouched("eventEndDate");
                            }}
                            className="form-control"

                        />
                    </div>
                </aside>

                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="eventEndTime">eventEndTime  *</label>
                        <input
                            type="time"
                            id="eventEndTime"
                            value={formik.values.eventEndTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter Time"
                        />
                    </div>
                </aside>

                {!isAdd ?
                    <aside className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="status">status</label>
                            <select
                                id="status"
                                className="form-control select2"
                                onChange={formik.handleChange}
                                value={formik.values.status}
                            >
                                <option value="1">Active</option>
                                <option value="2">Hold</option>
                                <option value="0">Deleted</option>
                            </select>
                        </div>
                    </aside> : null}

                <aside className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="uploadImage">UploadImage</label>
                        <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
                    </div>
                </aside>

                {!isAdd ?
                    <aside className="col-md-6">
                        {formik.values.fileUpload.filePath && formik.values.fileUpload.filePath ? (
                            <img src={modifyImageUrl(formik.values.fileUpload.filePath, formik.values.fileUpload.folderName )} alt="logo" className="form-image-tag" />
                        ) : (
                            <div className="empty-placeholder">Empty Image</div>
                        )}
                    </aside> : null}
            </div>

            <div className="modal-footer d-flex justify-content-end">
                <button type="submit" className="btn mb-2 btn-primary">
                    Save
                </button>
            </div>
        </form >
    );
};
