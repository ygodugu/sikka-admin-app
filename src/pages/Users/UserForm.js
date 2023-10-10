import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";
import { object, string } from "yup";

let userSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().required("Email is required"),
  primaryMobile: string().required("Mobile is required"),
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
      .get("/cities/name")
      .then((res) =>
        res.data.map((p) => ({
          id: p.id,
          label: `${p.name?.trim()} (${p.state?.name} - ${
            p.state?.country?.name
          })`,
          state: {
            id: p.stateId,
            label: p.state?.name,
            country: {
              id: p.state?.countryId,
              label: p.state?.country?.name,
            },
          },
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
            formik.setFieldValue("state", [
              data.find((x) => x.id === initialValues.cityId)?.state,
            ]);
            formik.setFieldValue("country", [
              data.find((x) => x.id === initialValues.cityId)?.state?.country,
            ]);
          }
        }
      });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
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
            <label for="addressLine1">Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              value={formik.values.addressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Address Line 1"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="addressLine2">Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              value={formik.values.addressLine2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Address Line 2"
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
                  formik.setFieldValue("city", value);
                  formik.setFieldValue("state", [value[0].state]);
                  formik.setFieldValue("country", [value[0].state.country]);
                  formik.setFieldValue("cityId", value[0].id);
                  formik.setFieldValue("stateId", value[0].state.id);
                  formik.setFieldValue(
                    "countryId",
                    value[0].state?.country?.id
                  );
                } else {
                  formik.setFieldValue("city", []);
                  formik.setFieldValue("state", []);
                  formik.setFieldValue("country", []);
                  formik.setFieldValue("cityId", "");
                  formik.setFieldValue("stateId", "");
                  formik.setFieldValue("countryId", "");
                }
              }}
              placeholder="Choose a city..."
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="inputState">State</label>
            <Typeahead
              selected={formik.values.state}
              id="stateId"
              disabled
              options={formik.values.state}
              placeholder="Choose a state..."
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="inputState">Country</label>
            <Typeahead
              selected={formik.values.country}
              id="countryId"
              disabled
              options={formik.values.country}
              placeholder="Choose a country..."
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label for="email">Email *</label>
            <input
              type="text"
              id="email"
              value={formik.values.email}
              disabled={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Email"
              required=""
              autofocus=""
            />
            <div className="invalid-feedback">{formik.errors.email}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="userType">User Type *</label>
            <select
              id="userType"
              value={formik.values.userType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
            >
              <option value="">Select User Type</option>
              <option>USER</option>
              <option>PRIEST</option>
              <option>TEMPLE</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="primaryMobile">Mobile *</label>
            <input
              type="number"
              id="primaryMobile"
              value={formik.values.primaryMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Mobile"
              required=""
              autofocus=""
            />
            <div className="invalid-feedback">
              {formik.errors.primaryMobile}
            </div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="inputCurrentLocation">Current Location</label>
            <input
              type="text"
              id="inputCurrentLocation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Current Location"
              required=""
              autofocus=""
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
