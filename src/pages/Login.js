import axios from "axios";
import Logo from "../assets/images/Logo-removebg-preview.png";
import Lock from "../assets/images/lock.svg";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

let loginSchema = object({
  email: string().required("Username is required"),
  password: string().required("Password is required"),
});

const login = (body) =>
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/auth/sign-in`, body)
    .then((res) => res.data);

export const Login = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (token) {
  //     navigate('/dashboard')
  //   }
  // }, [])

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("dashboard");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginMutation.mutate,
    validationSchema: loginSchema,
    validateOnBlur: true,
  });

  useEffect(() => {
    if (loginMutation.isSuccess) {
    }
  }, [loginMutation.isSuccess]);

  return (
    <div className="wrapper vh-100 login-wrapper">
      <div className="row align-items-center h-100">
        <form
          className="col-lg-3 col-md-4 col-10 mx-auto text-center"
          onSubmit={formik.handleSubmit}
        >
          <a
            className="navbar-brand mx-auto flex-fill text-center"
            href="/index.html"
          >
            <img src={Logo} style={{height:"150px"}}/>
          </a>
          <div className="login-form-box">
            <div className="form-group is-invalid">
              <label htmlFor="email">User Name</label>
              <input
                type="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control is-invalid form-control-lg"
                    : "form-control form-control-lg"
                }
                placeholder="Enter User Name"
                required
                autoFocus=""
              />
              <div className="invalid-feedback">{formik.errors.email}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={formik.handleChange}
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control is-invalid form-control-lg"
                    : "form-control form-control-lg"
                }
                placeholder="Enter Password"
                required=""
              />
              <div className="invalid-feedback">{formik.errors.password}</div>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Log In
            </button>
            {loginMutation.isError ? (
              <div className="mb-3">
                <div className="error-feedback">Login failed</div>
              </div>
            ) : null}
            <div className="checkbox mb-3">
              <a href="#">
                <img src={Lock} /> Forgot your password?
              </a>
            </div>
          </div>
          <p className="mt-4 mb-1 copy-right">&copy; 2023 Cikka.</p>
        </form>
      </div>
    </div>
  );
};
