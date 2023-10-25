import { useFormik } from "formik";
import { object, string } from "yup";

let CategoriesSchema = object({
    name: string().required("Name is required")
});
export const CategoriesForm = ({ initialValues, handleSubmit,  isAdd = false }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: CategoriesSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
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
      </div>
      <div className="modal-footer d-flex justify-content-end">
        <button type="submit" className="btn mb-2 btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};
