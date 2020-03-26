import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Modal } from "antd";
import "./Auth.css";
import { Mutation } from "react-apollo";
import { LOGIN_MUTATION } from "../graphql/mutations";
import Error from "../shared/Error";
import Loading from "../shared/Loading";
import Success from "../shared/Success";
import { SketchOutlined } from "@ant-design/icons";

const Login = ({ setNewUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = async (event, tokenAuth, client) => {
    event.preventDefault();
    const res = await tokenAuth();
    localStorage.setItem("token", res.data.tokenAuth.token);
    client.writeData({ data: { isLoggedIn : true} });
  };

  return (
    <Card
      className="card-register-login"
      bordered={false}
      style={{ padding: "10px", marginTop: "50px", width: "400px" }}
    >
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{
          username: username,
          password: password
        }}
        onCompleted={data => {
          console.log(data);
        }}
      >
        {(tokenAuth, { loading, error, client, called }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          return (
            <form onSubmit={event => handleSubmit(event, tokenAuth, client)}>
              <h2 className="text-white">Login</h2>
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
                Login
              </Button>
              <Button block onClick={() => setNewUser(true)}>
                not Registered --- Register
              </Button>
            </form>
          );
        }}
      </Mutation>
    </Card>
  );
};

export default Login;
