import React from "react";
import "./index.scss";
import { Field } from "formik";

function Select({ name, placeholder, options }) {
  return (
    <Field name={name} placeholder={placeholder}>
      {({ field }) => {
        return (
          <select {...field} className="select">
            {options.map((opt) => {
              return (
                <React.Fragment key={opt.value}>
                  <option value={opt.value} className="select__option">
                    {opt.key}
                  </option>
                </React.Fragment>
              );
            })}
          </select>
        );
      }}
    </Field>
  );
}

export default Select;
