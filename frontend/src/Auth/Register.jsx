import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Modal } from "antd";
import "./Auth.css";
import { Mutation } from "react-apollo";
import { REGISTER_MUTATION } from "../graphql/mutations";
import Error from "../shared/Error";
import Loading from "../shared/Loading";
import Success from "../shared/Success";
import { Link } from "react-router-dom";
import { SketchOutlined } from "@ant-design/icons";

const Register = ({ setNewUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleSubmit = (event, createUser) => {
    event.preventDefault();
    createUser();
  };
  return (
    <Card
      className="card-register-login"
      bordered={false}
      style={{ padding: "10px", marginTop: "50px", width: "400px" }}
    >
      <Mutation
        mutation={REGISTER_MUTATION}
        variables={{
          username: username,
          email: email,
          password: password
        }}
        onCompleted={data => {
          console.log(data);
          setConfirmModalVisible(true);
        }}
      >
        {(createUser, { loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          return (
            <form onSubmit={event => handleSubmit(event, createUser)}>
              <h2 className="text-white">Register</h2>
              <hr />
              <SketchOutlined spin
                style={{
                  fontSize: "50px",
                  color: "#08c",
                  paddingBottom: "30px"
                }}
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              <br />
              <br />
              <Button
                htmlType="submit"
                type="primary"
                block
                className="btn btn-sm btn-primary mb-3"
              >
                Register
              </Button>
              <Button block onClick={() => setNewUser(false)}>
                Do You have an account --- Login
              </Button>
            </form>
          );
        }}
      </Mutation>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={confirmModalVisible}
        onOk={() => setConfirmModalVisible(false)}
        onCancel={() => setConfirmModalVisible(false)}
      >
        <p>user {username} has successfully registered</p>
        <p>
          {" "}
          Go to the login page{" "}
          <Button onClick={() => setNewUser(false)}>Login</Button>
        </p>
      </Modal>
    </Card>
  );
};

export default Register;
