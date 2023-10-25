import React, { useState } from 'react';
import { useFormik } from "formik";
import { object, string } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

let eventsSchema = object({
    name: string().required("Name is required"),
});

export const EventsForm = ({ initialValues, onSubmit, isEdit = false, isAdd = false }) => {

    const [file, setFile] = useState();

    const handleSubmit = (values, { validateForm }) => {
        validateForm(values).then(res => {
            onSubmit({ ...values, file });
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
                        <label htmlFor="eventDate">EventDate</label>
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
                    </div>
                </aside>
                <aside className="col-md-4">
                    <div className="form-group">
                        <label for="totalPasses">TotalPasses</label>
                        <input
                            type="text"
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
                {!isAdd ?
                    <aside className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="status">status</label>
                            <input
                                type="number"
                                id="status"
                                name="status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control form-control-lg"
                            />
                        </div>
                    </aside> : null}

                {!isEdit ?
                    <aside className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="uploadImage">UploadImage</label>
                            <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
                        </div>
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
