import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";


let ServicesSchema = object({
    name: string().required("Name is required")
});
export const ServicesForm = ({ initialValues, handleSubmit, isAdd = false }) => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: ServicesSchema,
    });



    const [MerchantID, setMerchantID] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/merchants")
            .then((res) =>
                res.data?.data?.map((p) => ({
                    id: p.id,
                    label: `${p.user.firstName} ${p.user.lastName}`,
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
                                    formik.setFieldValue("MerchantID", value);
                                } else {
                                    formik.setFieldValue("merchantUserId", "");
                                    formik.setFieldValue("MerchantID", []);
                                }
                            }}
                            placeholder="Choose a MerchantUser..."
                        />
                        <div className="invalid-feedback">{formik.errors.businessCategoryId}</div>
                    </div>
                </aside>

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
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter description"
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
