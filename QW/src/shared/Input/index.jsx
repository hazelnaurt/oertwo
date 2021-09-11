import React from "react";
import "./index.scss";
import { Field } from "formik";

function Input({ name, placeholder }) {
  return <Field name={name} className="input" placeholder={placeholder} />;
}

export default Input;
