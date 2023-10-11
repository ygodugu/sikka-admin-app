import { useFormik } from "formik";
import { object, string } from "yup";


let voucherSchema = object({
  voucherCode: string().required("First Name is required"),
  name: string().required("Last Name is required")
});

export const VoucherForm = ({ initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: voucherSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-4">
          <div className="form-group">
            <label for="voucherValue">VoucherCode</label>
            <input
              type="text"
              id="voucherCode"
              value={formik.values.voucherCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enterd voucherCode"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="voucherValue">Voucher Value</label>
            <input
              type="number"
              id="voucherValue"
              value={formik.values.voucherValue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enterd voucherValue"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Name"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="voucherCode">Consumed Count</label>
            <input
              type="text"
              id="consumedCount"
              value={formik.values.consumedCount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter consumedCount"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="maxUsageCount">MaxUsage Count</label>
            <input
              type="number"
              id="maxUsageCount"
              value={formik.values.maxUsageCount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter maxUsageCount"
              required=""
              autoFocus=""
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

        <aside className="col-md-4">
          <div className="form-group">
            <label for="restrictUsageForUser">RestrictUsageForUser</label>
            <input
              type="text"
              id="restrictUsageForUser"
              value={formik.values.restrictUsageForUser}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter restrictUsageForUser"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="voucherValueType">voucherValueType</label>
            <select
              id="voucherValueType"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.voucherValueType}
            >
              <option value="">voucherValueType</option>
              <option value=" FREE_PRODUCT">FREE_PRODUCT</option>
              <option value="PRICE_PERCENTAGE">PRICE_PERCENTAGE</option>
              <option value="PRICE_VALUE ">PRICE_VALUE</option>
            </select>
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
