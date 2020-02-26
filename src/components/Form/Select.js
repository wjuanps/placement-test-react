import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

const Select = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { defaultValue, fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return <select ref={inputRef} {...rest}></select>;
};

export default Select;
