import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";
import { object, string } from "yup";

let userSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().required("Email is required"),
  physicalAddress: string().required("Email is physicalAddress"),
});

export const UserForm = ({ initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: userSchema,
  });

  const [cities, setCities] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/cities")
      .then((res) =>
        res.data?.data?.map((p) => ({
          id: p.id,
          label: `${p.name}`,
        }))
      )
      .then((data) => {
        setCities(data);
        if (initialValues.cityId) {
          if (initialValues.cityId) {
            formik.setFieldValue(
              "city",
              data.filter((x) => x.id === initialValues.cityId)
            );
          }
        }
      });
  }, []);


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-4">
          <div className="form-group">
            <label for="userType">User Type</label>
            <select
              id="userType"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.userType}
            >
              <option value="">userType</option>
              <option value="AGENT">AGENT</option>
              <option value="COMMUNITY">COMMUNITY</option>
              <option value="EVENT">EVENT</option>
              <option value="MEMBER">MEMBER</option>
              <option value="MERCHANT">MERCHANT</option>
              <option value="ORGANISER">ORGANISER</option>
              <option value="SUPERAGENT">SUPERAGENT</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="email">Email *</label>
            <input
              type="text"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Email"
            />
            <div className="invalid-feedback">{formik.errors.email}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter First Name"
            />
            <div className="invalid-feedback">{formik.errors.firstName}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="middleName">Middle Name</label>
            <input
              type="text"
              id="middleName"
              value={formik.values.middleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Middle Name"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Last Name"
            />
            <div className="invalid-feedback">{formik.errors.lastName}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="gender">Gender</label>
            <select
              id="gender"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="">Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="mobileNumber">MobileNumber</label>
            <input
              type="number"
              id="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter MobileNumber"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="alternativeNumber">AlternativeNumber</label>
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
        <aside className="col-md-4">
          <div className="form-group">
            <label for="motherTongue">MotherTongue</label>
            <input
              type="text"
              id="motherTongue"
              value={formik.values.motherTongue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter motherTongue"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="bloodGroup">BloodGroup</label>
            <input
              type="text"
              id="bloodGroup"
              value={formik.values.bloodGroup}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter alternativeNumber"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="dateOfBirth">DateOfBirth</label>
            <input
              type="date"
              id="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter dateOfBirth"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="anniversaryDate">AnniversaryDate</label>
            <input
              type="date"
              id="anniversaryDate"
              value={formik.values.anniversaryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter anniversaryDate"
            />
          </div>
        </aside>
        {/* address Input feilds start here  */}
        <aside className="col-md-4">
          <div className="form-group">
            <label for="addressType">AddressType</label>
            <select
              id="addressType"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.addressType}
            >
              <option value="">AddressType</option>
              <option value="EVENT_VENUE">EVENT_VENUE</option>
              <option value="OFFICE">OFFICE</option>
              <option value="OPERATIONAL">OPERATIONAL</option>
              <option value="POSTBOX">POSTBOX</option>
              <option value="REGISTERED">REGISTERED</option>
              <option value="RESIDENCE">RESIDENCE</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="area">Area</label>
            <input
              type="text"
              id="area"
              value={formik.values.area}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter area"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="block">Block</label>
            <input
              type="text"
              id="block"
              value={formik.values.block}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter religion"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="cityId">City</label>
            <Typeahead
              selected={formik.values.city}
              id="cityId"
              options={cities}
              onChange={(value) => {
                if (value && value.length > 0) {
                  formik.setFieldValue("cityId", value[0].id);
                } else {
                  formik.setFieldValue("cityId", "");
                }
              }}
              placeholder="Choose a city..."
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
            <label for="googleId">GoogleId</label>
            <input
              type="text"
              id="googleId"
              value={formik.values.googleId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter googleId"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="latitude">Latitude</label>
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
            <label for="longitude">Longitude</label>
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
            <label for="physicalAddress">PhysicalAddress *</label>
            <input
              type="text"
              id="physicalAddress"
              value={formik.values.physicalAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter physicalAddress"
            />
            <div className="invalid-feedback">{formik.errors.physicalAddress}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="pin">PIN</label>
            <input
              type="number"
              id="pin"
              value={formik.values.pin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter pin"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="street">street</label>
            <input
              type="text"
              id="street"
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter street"
            />
          </div>
        </aside>
        {/* address Input feilds start here  */}
        <aside className="col-md-4">
          <div className="form-group">
            <label for="religion">Religion</label>
            <select
              id="religion"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.religion}
            >
              <option value="">Religion</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Christian">Christian</option>
              <option value="Hindu">Hindu</option>
              <option value="Jain">Jain</option>
              <option value="Muslim">Muslim</option>
              <option value="Others">Others</option>
              <option value="Sikh">Sikh</option>
              <option value="Zoroastrian">Zoroastrian</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-12">
          <div className="form-group">
            <label for="shortBio">shortBio</label>
            <input
              type="shortBio"
              id="shortBio"
              value={formik.values.shortBio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter shortBio"
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
