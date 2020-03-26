import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ApolloConsumer } from "react-apollo";

const Signout = ({ classes }) => {
  const [visible, setVisible] = useState(true);

  const handleOk = client => {
    setVisible(false)
    localStorage.removeItem("authToken");
    client.writeData({ data: { isLoggedIn: false } });
    console.log("Signed out user", client);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  return (
    <ApolloConsumer>
      {client => (
        <>
        <Button  onClick={() => setVisible(true)}>
          signOut
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={() => handleOk(client)}
          onCancel={handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          </Modal>
          </>
         )}
    </ApolloConsumer>
  );
};

export default Signout;
