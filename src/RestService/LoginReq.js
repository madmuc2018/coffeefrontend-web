import React from "react";
import Request from "react-http-request";

function LoginReq(props) {
  const reqbody = JSON.parse(
    JSON.stringify({
      username: props.username,
      password: props.password
    })
  );
  return (
    <Request
      url="https://fsbccoffee.ngrok.io/v1/user/login"
      method="post"
      type="application/json"
      accept="application/json"
      send={reqbody}
      verbose={true}
    >
      {({ error, result, loading }) => {
        if (loading) {
          return <div>loading...</div>;
        } else {
          return JSON.stringify(result.body);
        }
      }}
    </Request>
  );
}

export default LoginReq;
