import React from "react";
import "./index.scss";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const onSubmit = (values, helper) => {
  console.log(values);
};

const validationSchema = Yup.object({
  keyword: Yup.string().required("User is not valid"),
});

function Searchbar() {
  return (
    <Formik
      initialValues={{ keyword: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="search-bar" autoComplete="off">
        <Input name="keyword" placeholder="Keyword:" />
        <Button text="Search" />
      </Form>
    </Formik>
  );
}

export default Searchbar;
