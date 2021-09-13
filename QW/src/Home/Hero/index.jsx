import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../shared/Input";
import Select from "../../shared/Select";
import Button from "../../shared/Button";

const onSubmit = (values, helper) => {
  console.log("values");
};

const validationSchema = Yup.object({
  keyword: Yup.string().required("User is not valid"),
  category: Yup.string().required(""),
  level: Yup.string().required(""),
});

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

function Hero() {
  const hisme = useHistory();
  return (
    <div className="hero">
      <div className="hero__upper">
        <div className="hero__upper_text_cont">
          <h1>Explore and Collabrate</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            natus!
          </h3>
        </div>
      </div>
      <div className="hero__lower">
        <Formik
          initialValues={{ keyword: "", category: "", level: "" }}
          onSubmit={() => {
            //console.log("mother fucker");
            hisme.push("/search");
          }}
          //validationSchema={validationSchema}
        >
          <Form className="hero__search" autoComplete="off">
            <Input name="keyword" placeholder="Keyword:" />
            <Select
              name="category"
              placeholder="Category"
              options={catOptions}
            />
            <Select name="level" placeholder="Level:" options={levelOptions} />
            <Button text="Search" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Hero;
