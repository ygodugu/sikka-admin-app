import { useFormik } from "formik";
import { object, string } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


let ServicesSchema = object({
    note: string().required("note is required")
});
export const MerchantServiceAppointmentBlockingForm = ({ initialValues, handleSubmit, isAdd = false }) => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: ServicesSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">

                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="note">Note</label>
                        <input
                            type="text"
                            id="note"
                            value={formik.values.note}
                            onChange={formik.handleChange}
                            className="form-control form-control-lg"
                            placeholder="Enter note"
                        />
                        <div className="invalid-feedback">{formik.errors.note}</div>
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label for="status">status</label>
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

                <aside className="col-md-6">
                    <div className="form-group">
                        <label for="startTime">startTime</label>
                        <DatePicker
                            selected={formik.values.startTime ? new Date(formik.values.startTime) : null}
                            onChange={(date) => {
                                formik.setFieldValue("startTime", date);
                                formik.setFieldTouched("startTime");
                            }}
                            className="form-control"
                            showTimeSelect
                            timeFormat="hh:mm aa"
                            dateFormat="dd/MM/yyyy hh:mm aa"
                        />
                    </div>
                </aside>

                <aside className="col-md-6">
                    <div className="form-group">
                        <label for="endTime">endTime</label>
                        <DatePicker
                            selected={formik.values.endTime ? new Date(formik.values.endTime) : null}
                            onChange={(date) => {
                                formik.setFieldValue("endTime", date);
                                formik.setFieldTouched("endTime");
                            }}
                            className="form-control"
                            showTimeSelect
                            timeFormat="hh:mm aa"
                            dateFormat="dd/MM/yyyy hh:mm aa"
                        />
                    </div>
                </aside>



            </div>
            <div className="modal-footer d-flex justify-content-end">
                <button type="submit" className="btn mb-2 btn-primary">
                    Save
                </button>
            </div>
        </form>
    );
};
