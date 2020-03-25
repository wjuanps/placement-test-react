import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} {...rest} />;
};

export default Input;
