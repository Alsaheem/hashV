import React, { useState } from "react";
import { Alert } from "antd";


const Error = ({  error }) => {
  return (
    <Alert
      message={error.message}
      banner
      closable
    />
  );
};


export default Error;
