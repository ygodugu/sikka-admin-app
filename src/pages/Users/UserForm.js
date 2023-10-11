import { useFormik } from "formik"; 
import { object, string } from "yup";

let userSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().required("Email is required"),
});

export const UserForm = ({ initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: userSchema,
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-4">
          <div className="form-group">
            <label for="firstName">User Type </label>
            <input
              type="text"
              id="firstName"
              value={formik.values.userType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter First Name"
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
            <input
              type="text"
              id="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter gender"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label for="mobileNumber">MobileNumber *</label>
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
        <aside className="col-md-4">
          <div className="form-group">
          <label for="motherTongue">motherTongue</label>
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
          <label for="bloodGroup">bloodGroup</label>
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
        <aside className="col-md-4">
          <div className="form-group">
            <label for="religion">Religion</label>
            <input
              type="text"
              id="religion"
              value={formik.values.religion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter religion"
            />
          </div>
        </aside>
        <aside className="col-md-8">
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
