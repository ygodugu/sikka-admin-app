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

      let validityStartTime = '';
      let validityEndTime = '';

      // Format validity start and end times only for adding data
      if (isAdd) {
        validityStartTime = values.validityStartTime ? `${new Date(values.validityStartDate).toISOString().split('T')[0]}T${values.validityStartTime}:00.000Z` : '';
        validityEndTime = values.validityEndTime ? `${new Date(values.validityEndDate).toISOString().split('T')[0]}T${values.validityEndTime}:00.000Z` : '';
      } else {
        // For edit operation, keep the times as they are
        validityStartTime = values.validityStartTime;
        validityEndTime = values.validityEndTime;
      }

      onSubmit({ ...values, file, validityStartTime, validityEndTime });
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

  const [MerchantID, setMerchantID] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/merchants?pageIndex=0&pageSize=200")
      .then((res) =>
        res.data?.data?.map((p) => ({
          id: p.id,
          label: `${p.tradeName}`,
        }))
      )
      .then((data) => {
        setMerchantID(data);
        if (initialValues.merchantId) {
          if (initialValues.merchantId) {
            formik.setFieldValue(
              "MerchantID",
              data.filter((x) => x.id === initialValues.merchantId)
            );
          }
        }
      });
  }, []);

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

  const convertToISOTime = (backendTimeString) => {
    // Handle empty or null values
    if (!backendTimeString || typeof backendTimeString !== 'string') {
      return null;
    }

    // Split the time string into hours, minutes, and seconds
    const timeComponents = backendTimeString.split(":");
    if (timeComponents.length !== 3) {
      return null; // Invalid time format
    }

    const [hours, minutes, seconds] = timeComponents.map(component => parseInt(component, 10));

    // Check if the components are valid numbers
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      return null;
    }

    // Create a new Date object with the time components
    const currentDate = new Date();
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setSeconds(seconds);

    return currentDate;
  };

  // const convertToISOTime = (backendTimeString) => {
  //   if (typeof backendTimeString !== 'string') {
  //     // Return null or handle the case appropriately based on your application's logic
  //     return null;
  //   }

  //   const [hours, minutes, seconds] = backendTimeString.split(":");
  //   const currentDate = new Date();
  //   const formattedDate = new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth(),
  //     currentDate.getDate(),
  //     parseInt(hours),
  //     parseInt(minutes),
  //     parseInt(seconds || 0) // Add default value for seconds if not provided
  //   );
  //   return formattedDate;
  // };



  const modifyImageUrl = (originalUrl, folderName) => {
    let parts = originalUrl.split('?');
    let fileName = parts[1].split('=')[1];
    let newUrl = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

    return newUrl;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">

        {!isEdit ? (
          <aside className="col-md-4">
            <div className="form-group">
              <label for="merchantUserId">MerchantId *</label>
              <Typeahead
                selected={formik.values.MerchantID}
                id="merchantUserId"
                options={MerchantID}
                onChange={(value) => {
                  if (value && value.length > 0) {
                    formik.setFieldValue("merchantId", value[0].id);
                    // formik.setFieldValue("merchantUserId", value);

                  } else {
                    formik.setFieldValue("merchantId", "");
                    // formik.setFieldValue("merchantUserId", []);
                  }
                }}
                placeholder="Choose a Merchant..."
              />
              <div className="invalid-feedback">{formik.errors.merchantUserId}</div>
            </div>
          </aside>
        ) : null}

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
                  formik.setFieldValue("categorie", value);
                } else {
                  formik.setFieldValue("categoryId", "");
                  formik.setFieldValue("categorie", []);
                }
              }}
              placeholder="Choose a category"
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

        {/* adding date for fields starts here */}

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

        {/* adding date for fields end here */}

        {/* adding time feilds start here  */}

        {/* {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="validityStartTime">validityStartTime</label>
              <DatePicker
                selected={
                  formik.values.validityStartTime
                    ? new Date(formik.values.validityStartTime)
                    : null
                }
                onChange={(e) => {
                  formik.setFieldValue("validityStartTime", e);
                  formik.setFieldTouched("validityStartTime");
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control"
              />
            </div>
          </aside>
          : null}


        {!isEdit ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="validityEndTime">validityEndTime</label>
              <DatePicker
                selected={
                  formik.values.validityEndTime
                    ? new Date(formik.values.validityEndTime)
                    : null
                }
                onChange={(e) => {
                  formik.setFieldValue("validityEndTime", e);
                  formik.setFieldTouched("validityEndTime");
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control"
              />
            </div>
          </aside>
          : null} */}

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="validityStartTime">validityStartTime  *</label>
            <input
              type="time"
              id="validityStartTime"
              value={formik.values.validityStartTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter validityStartTime"
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="validityEndTime">validityEndTime  *</label>
            <input
              type="time"
              id="validityEndTime"
              value={formik.values.validityEndTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter validityEndTime"
            />
          </div>
        </aside>

        {/* {!isAdd ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="validityStartTime">validityStartTime</label>
              <DatePicker
                selected={
                  formik.values.validityStartTime
                    ? convertToISOTime(formik.values.validityStartTime)
                    : null
                }
                onChange={(date) => {
                  formik.setFieldValue("validityStartTime", date ? date.toISOString() : null);
                  formik.setFieldTouched("validityStartTime");
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control"
              />
            </div>
          </aside>
          : null}


        {!isAdd ?
          <aside className="col-md-4">
            <div className="form-group">
              <label htmlFor="validityEndTime">validityEndTime</label>
              <DatePicker
                selected={
                  formik.values.validityEndTime
                    ? convertToISOTime(formik.values.validityEndTime)
                    : null
                }
                onChange={(date) => {
                  formik.setFieldValue("validityEndTime", date ? date.toISOString() : null);
                  formik.setFieldTouched("validityEndTime");
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control"
              />
            </div>
          </aside>
          : null} */}

        {/* adding time feilds end here  */}

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="voucherValueType">VoucherValueType *</label>
            <select
              id="voucherValueType"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.voucherValueType}
            >
              <option value="">voucherValueType</option>
              <option value="FREE_PRODUCT">FREE_PRODUCT</option>
              <option value="PRICE_PERCENTAGE">PRICE_PERCENTAGE</option>
              <option value="PRICE_VALUE">PRICE_VALUE</option>
            </select>
          </div>
        </aside>

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

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="uploadImage">UploadImage *</label>
            <input type="file" id="uploadImage" name="uploadImage" onChange={handleFileSelect} className="form-control form-control-lg" />
          </div>
        </aside>
      </div>

      {
        !isAdd ?
          <aside className="col-md-4">
            {formik.values.voucherAsset.filePath && formik.values.voucherAsset.filePath ? (
              <img src={modifyImageUrl(formik.values.voucherAsset.filePath, formik.values.voucherAsset.folderName)} alt="logo" className="form-image-tag" />
            ) : (
              <div className="empty-placeholder">Empty Image</div>
            )}
          </aside> : null
      }

      <div className="modal-footer d-flex justify-content-end">
        <button type="submit" className="btn mb-2 btn-primary">
          Save
        </button>
      </div>
    </form >
  );
};
