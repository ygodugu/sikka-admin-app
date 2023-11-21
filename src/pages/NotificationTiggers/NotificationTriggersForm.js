import { useFormik } from "formik"
import { object, string } from 'yup';


let notificationTriggerSchema = object({
    name: string().required('Name is required'),
    description: string().required("Description is required"),
    variables: string().required("Variables is required"),
});


export const NotificationTriggerForm = ({ onSubmit, initialValues }) => {

    const handleSubmit = (values, { validateForm }) => {
        validateForm(values).then(res => {
            if (values.status) {
                onSubmit({ ...values, status: parseInt(values.status) })
            } else {
                onSubmit(values)
            }
        })
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: notificationTriggerSchema,
        validateOnBlur: true,
        validateOnChange: false
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Template ID</label>
                        <input type="text" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-lg" placeholder="Enter Template ID" />
                        <div className="invalid-feedback">
                            {formik.errors.name}
                        </div>
                    </div>
                </aside>
                <aside className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="variables">Variables</label>
                        <input type="text" id="variables" value={formik.values.variables} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-lg" placeholder="Enter Variables" />
                        <div className="invalid-feedback">
                            {formik.errors.variables}
                        </div>
                    </div>
                </aside>

                <aside className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-lg" placeholder="Enter Description" />
                        <div className="invalid-feedback">
                            {formik.errors.description}
                        </div>
                    </div>
                </aside>
            </div>
            <div className="modal-footer d-flex justify-content-end">
                <button type="submit" className="btn mb-2 btn-primary">Save</button>
            </div>
        </form>
    )
}