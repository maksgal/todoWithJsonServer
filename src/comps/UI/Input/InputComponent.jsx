import React from "react";
import Input from "@material-ui/core/Input";

export const InputComponent = ({
  value,
  inputHandler,
  placeholder,
  fullWidth,
  multiline,
  inputProps,
}) => {
  return (
    <Input
      autoFocus={true}
      onChange={inputHandler}
      value={value}
      inputProps={inputProps}
      placeholder={placeholder}
      fullWidth={fullWidth}
      multiline={multiline}
    />
  );
};
