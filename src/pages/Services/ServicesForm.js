import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


let ServicesSchema = object({
    name: string().required("Name is required")
});
export const ServicesForm = ({ initialValues, onSubmit, isEdit = false, isAdd = false }) => {

    const handleSubmit = (values, { validateForm }) => {
        validateForm(values).then(res => {

             const startTime = values.startTime ? `${new Date(values.startDate).toISOString().split('T')[0]}T${values.startTime}` : '';
             const endTime = values.endTime ? `${new Date(values.endDate).toISOString().split('T')[0]}T${values.endTime}` : '';

            onSubmit({ ...values, startTime, endTime });
        });
    }


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: ServicesSchema,
    });



    const [MerchantID, setMerchantID] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/merchants?pageIndex=0&pageSize=200")
            .then((res) =>
                res.data?.data?.map((p) => ({
                    id: p.userId,
                    label: `${p.tradeName}`,
                }))
            )
            .then((data) => {
                setMerchantID(data);
                if (initialValues.merchantUserId) {
                    if (initialValues.merchantUserId) {
                        formik.setFieldValue(
                            "MerchantID",
                            data.filter((x) => x.id === initialValues.merchantUserId)
                        );
                    }
                }
            });
    }, []);


    const modifyImageUrl = (originalUrl, folderName) => {
        let parts = originalUrl.split('?');
        let fileName = parts[1].split('=')[1];
        let newUrl = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

        return newUrl;
    };


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">

                {!isEdit ? (
                    <aside className="col-md-6">
                        <div className="form-group">
                            <label for="merchantUserId">MerchantUserId *</label>
                            <Typeahead
                                selected={formik.values.MerchantID}
                                id="merchantUserId"
                                options={MerchantID}
                                onChange={(value) => {
                                    if (value && value.length > 0) {
                                        formik.setFieldValue("merchantUserId", value[0].id);
                                        // formik.setFieldValue("merchantUserId", value);

                                    } else {
                                        formik.setFieldValue("merchantUserId", "");
                                        // formik.setFieldValue("merchantUserId", []);
                                    }
                                }}
                                placeholder="Choose a MerchantUser..."
                            />
                            <div className="invalid-feedback">{formik.errors.merchantUserId}</div>
                        </div>
                    </aside>
                ) : null}

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter name"
                        />
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    </div>
                </aside>


                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="rank">Rank</label>
                        <input
                            type="number"
                            id="rank"
                            value={formik.values.rank}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter duration"
                        />
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="number"
                            id="duration"
                            value={formik.values.duration}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter duration"
                        />
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="appointmentPerSlot">Appointment-Per-Slot</label>
                        <input
                            type="number"
                            id="appointmentPerSlot"
                            value={formik.values.appointmentPerSlot}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter duration"
                        />
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="startDate">StartDate *</label>
                        <DatePicker
                            selected={
                                formik.values.startDate
                                    ? new Date(formik.values.startDate)
                                    : null
                            }
                            onChange={(e) => {
                                formik.setFieldValue("startDate", e);
                                formik.setFieldTouched("startDate");
                            }}
                            className="form-control"

                        />
                        <div className="invalid-feedback">{formik.errors.startDate}</div>
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="startTime">StartTime  *</label>
                        <input
                            type="time"
                            id="startTime"
                            value={formik.values.startTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter startTime"
                        />
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="endDate">EndDate</label>
                        <DatePicker
                            selected={
                                formik.values.endDate
                                    ? new Date(formik.values.endDate)
                                    : null
                            }
                            onChange={(e) => {
                                formik.setFieldValue("endDate", e);
                                formik.setFieldTouched("endDate");
                            }}
                            className="form-control"

                        />
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="endTime">EndTime  *</label>
                        <input
                            type="time"
                            id="endTime"
                            value={formik.values.endTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter Time"
                        />
                    </div>
                </aside>

                <aside className="col-md-6">
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
                </aside>

                <aside className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter description"
                        />
                    </div>
                </aside>

                {!isAdd ?
                    <aside className="col-md-6">
                        {formik.values.fileUpload.filePath && formik.values.fileUpload.filePath ? (
                            <img src={modifyImageUrl(formik.values.fileUpload.filePath, formik.values.fileUpload.folderName)} alt="logo" className="form-image-tag" />
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
        </form>
    );
};
