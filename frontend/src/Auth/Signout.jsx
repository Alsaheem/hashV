import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ApolloConsumer } from "react-apollo";

const Signout = ({ classes }) => {
  const [visible, setVisible] = useState(false);

  const handleOk = client => {
    setVisible(false)
    localStorage.removeItem("token");
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
          title="Logout Modal"
          visible={visible}
            onOk={() => handleOk(client)}
            onCancel={handleCancel}
            okText="Yes..Logout"
          cancelText="Cancel"

          okButtonProps={{ disabled: false }}
          cancelButtonProps={{ disabled: false }}
        >
          <p>Do you really want to Logout ... :(</p>
          </Modal>
          </>
         )}
    </ApolloConsumer>
  );
};

export default Signout;
