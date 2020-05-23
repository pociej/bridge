import { Form } from "semantic-ui-react";
import React, { useState } from "react";

export const useInput = ({ type = "text", ...rest }) => {
  const [value, setValue] = useState("");
  const input = (
    <Form.Input
      {...rest}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
};
