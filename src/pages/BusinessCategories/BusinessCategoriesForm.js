import React, { useState } from 'react';
import { useFormik } from "formik";
import { object, string } from "yup";

let businessCategoriesSchema = object({
  name: string().required("Name is required"),
});

export const BusinessCategoriesForm = ({ initialValues, onSubmit, isAdd = false }) => {

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
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: businessCategoriesSchema,
  });


  const modifyImageUrl = (originalUrl, folderName) => {
    let parts = originalUrl.split('?');
    let fileName = parts[1].split('=')[1];
    let newUrl = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

    return newUrl;
  };

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
        <aside className="col-md-6">
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
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="uploadImage">UploadImage</label>
            <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
          </div>
        </aside>

        <aside className="col-md-6">
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

        {!isAdd ?
          <aside className="col-md-6">
            {formik.values.logo.filePath && formik.values.logo.filePath ? (
              <img src={modifyImageUrl(formik.values.logo.filePath, formik.values.logo.folderName)} alt="logo" className="form-image-tag" />
            ) : (
              <div className="empty-placeholder">Empty Image</div>
            )}
          </aside> : null
        }

        {/* <aside className="col-md-6">
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
        </aside> */}
      </div >
      <div className="modal-footer d-flex justify-content-end">
        <button type="submit" className="btn mb-2 btn-primary">
          Save
        </button>
      </div>
    </form >
  );
};
