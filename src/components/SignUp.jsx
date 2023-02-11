import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
