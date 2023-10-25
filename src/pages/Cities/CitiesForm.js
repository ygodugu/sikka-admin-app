import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";
import { object, string } from "yup";

let countriesSchema = object({
    stateId: string().required("Select state is required"),
    name: string().required("Name is required"),
});

export const CitiesForm = ({ initialValues, handleSubmit, isAdd = false  }) => {
    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: countriesSchema,
    });

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/states")
            .then((res) =>
                res.data?.data?.map((p) => ({
                    id: p.id,
                    label: `${p.name}`,
                }))
            )
            .then((data) => {
                setCountries(data);
                if (initialValues.stateId) {
                    if (initialValues.stateId) {
                        formik.setFieldValue(
                            "state",
                            data.filter((x) => x.id === initialValues.stateId)
                        );
                    }
                }
            });
    }, []);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <aside className="col-md-6">
                    <div className="form-group">
                        <label for="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                        />
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    </div>
                </aside>
                <aside className="col-md-6">
                    <div className="form-group">
                        <label for="stateId">stateId *</label>
                        <Typeahead
                            selected={formik.values.state}
                            id="stateId"
                            options={countries}
                            onChange={(value) => {
                                if (value && value.length > 0) {
                                    formik.setFieldValue("stateId", value[0].id);
                                } else {
                                    formik.setFieldValue("stateId", "");
                                }
                            }}
                            placeholder="Choose a country..."
                        />
                        <div className="invalid-feedback">{formik.errors.stateId}</div>
                    </div>
                </aside>
                <aside className="col-md-12">
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
