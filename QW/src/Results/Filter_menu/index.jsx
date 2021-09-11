import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "../../shared/Select";
import Checkbox from "../../shared/Checkbox";

const onSubmit = (values, helper) => {
  console.log(values);
};

const validationSchema = Yup.object({});

const catOptions = [
  { key: "Category", value: "" },
  { key: "Curriculum & Syllabi", value: "cur_s" },
  { key: "Education Mgt & Policy", value: "edu_m" },
  { key: "Teaching & Learning RES", value: "tea_l" },
  { key: "Professional Development", value: "pro_d" },
];

const levelOptions = [
  { key: "Level", value: "" },
  { key: "Preschool", value: "PS" },
  { key: "Lower Primary", value: "LP" },
  { key: "Upper Primary", value: "UP" },
  { key: "Middle School", value: "MS" },
  { key: "High School", value: "HS" },
];

function Filter_menu() {
  return (
    <Formik
      initialValues={{ category: "", level: [], subject: [] }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off" className="filter_menu">
        <Select name="category" options={catOptions} />
        <Checkbox name="level" options={levelOptions} />
        <Checkbox name="subject" options={catOptions} />
        <button type="submit">Check</button>
      </Form>
    </Formik>
  );
}

export default Filter_menu;
