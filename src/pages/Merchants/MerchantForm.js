import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";
import { object, string } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

let MerchantSchema = object({
  businessLegalName: string().required("businessLegalName is required"),
  tradeName: string().required("tradeName is required"),
});

export const MerchantForm = ({ initialValues, onSubmit, isEdit = false, isAdd = false }) => {

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
    validationSchema: MerchantSchema,
  });

  const [BusinessCategories, setBusinessCategories] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/business-categories")
      .then((res) =>
        res.data?.data?.map((p) => ({
          id: p.id,
          label: `${p.name}`,
        }))
      )
      .then((data) => {
        setBusinessCategories(data);
        if (initialValues.businessCategoryId) {
          if (initialValues.businessCategoryId) {
            formik.setFieldValue(
              "BusinessCategories",
              data.filter((x) => x.id === initialValues.businessCategoryId)
            );
          }
        }
      });
  }, []);



  const [Industries, setIndustries] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/industries")
      .then((res) =>
        res.data?.data?.map((p) => ({
          id: p.id,
          label: `${p.name}`,
        }))
      )
      .then((data) => {
        setIndustries(data);
        if (initialValues.industryId) {
          if (initialValues.industryId) {
            formik.setFieldValue(
              "Industries",
              data.filter((x) => x.id === initialValues.industryId)
            );
          }
        }
      });
  }, []);


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="userType">userType</label>
              <select
                id="userType"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.userType}
              >
                <option value="">userType</option>
                <option value="AGENT">AGENT</option>
                <option value="COMMUNITY">COMMUNITY</option>
                <option value="EVENT">EVENT</option>
                <option value="MEMBER">MEMBER</option>
                <option value="Muslim">Muslim</option>
                <option value="MERCHANT">MERCHANT</option>
                <option value="ORGANISER">ORGANISER</option>
                <option value="SUPERAGENT">SUPERAGENT</option>
              </select>
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="religion">religion</label>
              <select
                id="religion"
                className="form-control select2"
                onChange={formik.handleChange}
                value={formik.values.religion}
              >
                <option value="">religion</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Christian">Christian</option>
                <option value="Hindu">Hindu</option>
                <option value="Jain">Jain</option>
                <option value="Muslim">Muslim</option>
                <option value="Sikh">Sikh</option>
                <option value="Zoroastrian">Zoroastrian</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </aside>
          : null}

        {/* {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="provider">Provider</label>
              <select
                id="provider"
                className="form-control select2"
                onChange={formik.handleChange}
                value={formik.values.provider}
              >

                <option value="">provider</option>
                <option value="azure">azure</option>
                <option value="facebook">facebook</option>
                <option value="github">github</option>
                <option value="google">google</option>
                <option value="local">local</option>
              </select>
            </div>
          </aside>
          : null} */}

        <aside className="col-md-4">
          <div className="form-group">
            <label for="businessCategoryId">businessCategory *</label>
            <Typeahead
              selected={formik.values.BusinessCategories}
              id="businessCategoryId"
              options={BusinessCategories}
              onChange={(value) => {
                if (value && value.length > 0) {
                  formik.setFieldValue("businessCategoryId", value[0].id);
                  formik.setFieldValue("BusinessCategories", value);
                } else {
                  formik.setFieldValue("businessCategoryId", "");
                  formik.setFieldValue("BusinessCategories", []);
                }
              }}
              placeholder="Choose a businessCategory..."
            />
            <div className="invalid-feedback">{formik.errors.businessCategoryId}</div>
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label for="industryId">industry *</label>
            <Typeahead
              selected={formik.values.Industries}
              id="industryId"
              options={Industries}
              onChange={(value) => {
                if (value && value.length > 0) {
                  formik.setFieldValue("industryId", value[0].id);
                  formik.setFieldValue("Industries", value);

                } else {
                  formik.setFieldValue("industryId", "");
                  formik.setFieldValue("Industries", []);
                }
              }}
              placeholder="Choose a Industries..."
            />
            <div className="invalid-feedback">{formik.errors.industryId}</div>
          </div>
        </aside>

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="firstName">firstName</label>
              <input
                type="text"
                id="firstName"
                value={formik.values.abfirstNamen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter firstName"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="middleName">middleName</label>
              <input
                type="text"
                id="middleName"
                value={formik.values.middleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter middleName"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="lastName">lastName</label>
              <input
                type="text"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter lastName"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="email">email</label>
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter email"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="password">password</label>
              <input
                type="text"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="dateOfBirth">dateOfBirth</label>
              <DatePicker
                selected={
                  formik.values.dateOfBirth
                    ? new Date(formik.values.dateOfBirth)
                    : null
                }
                onChange={(e) => {
                  formik.setFieldValue("dateOfBirth", e);
                  formik.setFieldTouched("dateOfBirth");
                }}
                className="form-control"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="anniversaryDate">anniversaryDate</label>
              <DatePicker
                selected={
                  formik.values.anniversaryDate
                    ? new Date(formik.values.anniversaryDate)
                    : null
                }
                onChange={(e) => {
                  formik.setFieldValue("anniversaryDate", e);
                  formik.setFieldTouched("anniversaryDate");
                }}
                className="form-control"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="joiningDate">joiningDate</label>
              <DatePicker
                selected={
                  formik.values.joiningDate
                    ? new Date(formik.values.joiningDate)
                    : null
                }
                onChange={(e) => {
                  formik.setFieldValue("joiningDate", e);
                  formik.setFieldTouched("joiningDate");
                }}
                className="form-control"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="mobileNumber">mobileNumber</label>
              <input
                type="number"
                id="mobileNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter mobileNumber"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="gender">gender</label>
              <select
                id="gender"
                className="form-control select2"
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <option value="">gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other </option>
              </select>
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="bloodGroup">bloodGroup</label>
              <input
                type="text"
                id="bloodGroup"
                value={formik.values.bloodGroup}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter bloodGroup"
              />
            </div>
          </aside>
          : null}

        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label for="alternativeNumber">alternativeNumber</label>
              <input
                type="number"
                id="alternativeNumber"
                value={formik.values.alternativeNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control form-control-lg"
                placeholder="Enter alternativeNumber"
              />
            </div>
          </aside>
          : null}

        <hr />

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
              placeholder="Enter ABN"
            />
          </div>
        </aside>


        <aside className="col-md-4">
          <div className="form-group">
            <label for="acn">ACN</label>
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
            <label for="latitude">latitude</label>
            <input
              type="text"
              id="latitude"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter latitude"
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label for="longitude">longitude</label>
            <input
              type="text"
              id="longitude"
              value={formik.values.longitude}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter longitude"
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="rank">Rank</label>
            <input
              type="number"
              id="rank"
              name="rank"
              value={formik.values.rank}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
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

        {!isAdd ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="uploadImage">Upload logo Image</label>
              <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
            </div>
          </aside>
          : null}

        {!isAdd ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="uploadImage">Upload squareLogo Image</label>
              <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
            </div>
          </aside>
          : null}

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
        </aside>

      </div>
      <div className="modal-footer d-flex justify-content-end">
        <button type="submit" className="btn mb-2 btn-primary">
          Save
        </button>
      </div>
    </form >
  );
};
