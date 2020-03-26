import React, { useState } from "react";
import { Alert } from "antd";


const Success = ({  message }) => {
  return (
    <Alert
      message={message}
      description="SuccessFul"
      type="success"
      showIcon
    />
  );
};


export default Success;
