import axios from "axios";
import Logo from "../assets/images/Cikka_Logo_Dashboard.png";
import Lock from "../assets/images/lock.svg";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { Loader } from '../components/Loader'; // Corrected import statement


let loginSchema = object({
  email: string().required("Username is required"),
  password: string().required("Password is required"),
});

const login = (body) =>
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/auth/sign-in`, body)
    .then((res) => res.data);

export const Login = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility



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
    onSubmit: (values) => {
      setIsLoading(true); // Set loading to true on form submit

      // Trim leading and trailing spaces from email and password
      const trimmedValues = {
        email: values.email.trim(),
        password: values.password.trim(),
      };
      loginMutation.mutate(trimmedValues);
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    onError: () => {
      setIsLoading(false); // Set loading to false on error
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   if (loginMutation.isSuccess) {
  //     setIsLoading(false);
  //   }
  // }, [loginMutation.isSuccess]);

  useEffect(() => {
    if (loginMutation.isSuccess || loginMutation.isError) {
      setIsLoading(false);
    }
  }, [loginMutation.isSuccess, loginMutation.isError]);

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
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
              <img src={Logo} style={{ height: "150px" }} />
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
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"} // Set input type based on showPassword state
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
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="fe fe-eye fe-16"></i>

                    ) : (
                      <i className="fe fe-eye-off fe-16"></i>
                    )}
                  </button>
                </div>
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
            <p className="mt-4 mb-1 copy-right">&copy; {(new Date().getFullYear())} cikka.</p>
          </form>
        </div>
      </div>
    </>
  );
};
