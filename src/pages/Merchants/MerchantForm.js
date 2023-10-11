import { useFormik } from "formik";
import { object, string } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

let MerchantSchema = object({
  businessLegalName: string().required("businessLegalName is required"),
  tradeName: string().required("tradeName is required"),
});

export const MerchantForm = ({ initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: MerchantSchema,
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-4">
          <div className="form-group">
            <label for="abn">ABN</label>
            <input
              type="text"
              id="abn"
              value={formik.values.abn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter abn"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="acn">acn</label>
            <input
              type="text"
              id="acn"
              value={formik.values.acn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter acn"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="businessLegalName">businessLegalName *</label>
            <input
              type="text"
              id="businessLegalName"
              value={formik.values.businessLegalName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter First Name"
            />
            <div className="invalid-feedback">{formik.errors.businessLegalName}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="businessStructure">businessStructure</label>
            <select
              id="businessStructure"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.businessStructure}
            >
              <option value="">businessStructure</option>
              <option value=" Co_Operative">Co_Operative</option>
              <option value="Company">Company</option>
              <option value="Corporation">Corporation</option>
              <option value="Indigenous">Indigenous</option>
              <option value="Joint_Venture">Joint_Venture</option>
              <option value="Partnership">Partnership</option>
              <option value="Sole_Trader">Sole_Trader</option>
              <option value="Trust">Trust</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="dateOfOperation">dateOfOperation</label>
            <DatePicker
              selected={
                formik.values.dateOfOperation
                  ? new Date(formik.values.dateOfOperation)
                  : null
              }
              onChange={(e) => {
                formik.setFieldValue("dateOfOperation", e);
                formik.setFieldTouched("dateOfOperation");
              }}
              className="form-control"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="dateOfRegistration">dateOfRegistration</label>
            <DatePicker
              selected={
                formik.values.dateOfRegistration
                  ? new Date(formik.values.dateOfRegistration)
                  : null
              }
              onChange={(e) => {
                formik.setFieldValue("dateOfRegistration", e);
                formik.setFieldTouched("dateOfRegistration");
              }}
              className="form-control"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="description">description</label>
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
            <label for="facebookUrl">facebookUrl</label>
            <input
              type="text"
              id="facebookUrl"
              value={formik.values.facebookUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter facebookUrl"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="instagramUrl">instagramUrl</label>
            <input
              type="text"
              id="instagramUrl"
              value={formik.values.instagramUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter instagramUrl"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="merchantCikkaTransactionDefaultPercentage">merchantCikkaTransactionDefaultPercentage</label>
            <input
              type="number"
              id="merchantCikkaTransactionDefaultPercentage"
              value={formik.values.merchantCikkaTransactionDefaultPercentage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter merchantCikkaTransactionDefaultPercentage"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="merchantType">merchantType</label>
            <select
              id="merchantType"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.merchantType}
            >
              <option value="">merchantType</option>
              <option value="COMMUNITY">COMMUNITY</option>
              <option value="LISTED_BUSINESS">LISTED_BUSINESS</option>
              <option value="MERCHANT_PARTNER">MERCHANT_PARTNER</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="operationsInAWeek">operationsInAWeek</label>
            <input
              type="number"
              id="operationsInAWeek"
              value={formik.values.operationsInAWeek}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter anniversaryDate"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="ownerEmail">ownerEmail *</label>
            <input
              type="text"
              id="ownerEmail"
              value={formik.values.ownerEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter ownerEmail"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="ownerMobile">ownerMobile</label>
            <input
              type="number"
              id="ownerMobile"
              value={formik.values.ownerMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter ownerMobile"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="ownerName">ownerName</label>
            <input
              type="text"
              id="ownerName"
              value={formik.values.ownerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter ownerName"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="phoneNumber">phoneNumber</label>
            <input
              type="number"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter phoneNumber"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="representativeDesignation">representativeDesignation</label>
            <input
              type="text"
              id="representativeDesignation"
              value={formik.values.representativeDesignation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter representativeDesignation"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="representativeEmail">representativeEmail</label>
            <input
              type="text"
              id="representativeEmail"
              value={formik.values.representativeEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter representativeEmail"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="representativeMobile">representativeMobile</label>
            <input
              type="number"
              id="representativeMobile"
              value={formik.values.representativeMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter representativeMobile"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="representativeName">representativeName</label>
            <input
              type="text"
              id="representativeName"
              value={formik.values.representativeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter representativeName"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="status">status</label>
            <input
              type="number"
              id="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter status"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="taxFileNumber">taxFileNumber</label>
            <input
              type="text"
              id="taxFileNumber"
              value={formik.values.taxFileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter taxFileNumber"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="tradeName">tradeName</label>
            <input
              type="text"
              id="tradeName"
              value={formik.values.tradeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter representativeMobile"
            />
            <div className="invalid-feedback">{formik.errors.tradeName}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="website">website</label>
            <input
              type="text"
              id="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter website"
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
