import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import { object, string } from "yup";
import { axiosInstance } from "../../axiosInstance";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";


let voucherSchema = object({
  voucherCode: string().required("First Name is required"),
  name: string().required("Last Name is required")
});

export const VoucherForm = ({ initialValues, onSubmit, isEdit = false, isAdd = false }) => {

  const [file, setFile] = useState();

  const handleSubmit = (values, { validateForm }) => {
    validateForm(values).then(res => {
      onSubmit({ ...values, file });
    });
  }

  // const handleSubmit = (values,{ validateForm }) => {
  //   validateForm(values).then(res => {
  //     onSubmit({ ...values, file})
  //   })
  // }

  const handleFileSelect = (event) => {
    setFile(event.target.files[0])
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: voucherSchema,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/categories")
      .then((res) =>
        res.data?.data?.map((p) => ({
          id: p.id,
          label: `${p.name}`,
        }))
      )
      .then((data) => {
        setCategories(data);
        if (initialValues.categoryId) {
          if (initialValues.categoryId) {
            formik.setFieldValue(
              "categorie",
              data.filter((x) => x.id === initialValues.categoryId)
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
            <label for="categoryId">categoryId *</label>
            <Typeahead
              selected={formik.values.categorie}
              id="categoryId"
              options={categories}
              onChange={(value) => {
                if (value && value.length > 0) {
                  formik.setFieldValue("categoryId", value[0].id);
                  // formik.setFieldValue("categorie", value);
                } else {
                  formik.setFieldValue("categoryId", "");
                  // formik.setFieldValue("categorie", []);
                }
              }}
              placeholder="Choose a category"
            />
          </div>
        </aside>
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
              type="number"
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
            <label htmlFor="validityStartDate">validityStartDate</label>
            <DatePicker
              selected={
                formik.values.validityStartDate
                  ? new Date(formik.values.validityStartDate)
                  : null
              }
              onChange={(e) => {
                formik.setFieldValue("validityStartDate", e);
                formik.setFieldTouched("validityStartDate");
              }}
              className="form-control"
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="validityEndDate">ValidityEndDate</label>
            <DatePicker
              selected={
                formik.values.validityEndDate
                  ? new Date(formik.values.validityEndDate)
                  : null
              }
              onChange={(e) => {
                formik.setFieldValue("validityEndDate", e);
                formik.setFieldTouched("validityEndDate");
              }}
              className="form-control"
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
              <option value="FREE_PRODUCT">FREE_PRODUCT</option>
              <option value="PRICE_PERCENTAGE">PRICE_PERCENTAGE</option>
              <option value="PRICE_VALUE ">PRICE_VALUE</option>
            </select>
          </div>
        </aside>
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
        </aside>
        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="uploadImage">UploadImage</label>
              <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
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
