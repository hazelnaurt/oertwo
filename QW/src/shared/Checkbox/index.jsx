import React from "react";
import "./index.scss";
import { Field } from "formik";
import sprite from "../../assets/imgz/sprites.svg";

function Checkbox({ name, options }) {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return options.map((opt) => {
          return (
            <div
              key={opt.value}
              className={
                opt.value != "" ? "checker" : "checker checker--toplevel"
              }
            >
              <label htmlFor={opt.value}>
                <input
                  type="checkbox"
                  id={opt.value}
                  {...field}
                  value={opt.value}
                  checked={field.value.includes(opt.value)}
                />
                <div className="checker__svg-cont">
                  <svg
                    className={
                      field.value.includes(opt.value) ? "checked" : "unchecked"
                    }
                  >
                    {field.value.includes(opt.value) ? (
                      <use xlinkHref={`${sprite}#checkbox`}></use>
                    ) : (
                      <use xlinkHref={`${sprite}#checkOff`}></use>
                    )}
                  </svg>
                </div>
                {opt.key}
              </label>
            </div>
          );
        });
      }}
    </Field>
  );
}

export default Checkbox;
