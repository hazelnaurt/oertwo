import React from "react";
import "./index.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorTemp from "./ErrorTemp";
import * as Yup from "yup";

const onSubmit = (values, helper) => {
  console.log(values);
};

const validationSchema = Yup.object({
  keyword: Yup.string().required("Keyword is not valid"),
});

function Search() {
  return (
    <Formik
      initialValues={{ keyword: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="search" autoComplete="off">
        <Field
          name="keyword"
          className="search__input"
          placeholder="Keyword:"
        />
        <ErrorMessage name="keyword" component={ErrorTemp} />
        <button type="submit" className="search__btn">
          Search
        </button>
      </Form>
    </Formik>
  );
}

export default Search;
