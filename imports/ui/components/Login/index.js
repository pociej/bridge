import React, { useState } from "react";
import { Grid, Form, Header, Message } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import styles from "./styles.css";
import { useInput } from "../Input";
import { useStore } from "react-redux";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

export const Login = function () {
  const isUserLoggedIn = useSelector((state) => !!state.currentUser);
  const [username, usernameInput] = useInput({
    type: "text",
    label: "Username",
    inline: true,
  });

  const [password, passwordInput] = useInput({
    type: "password",
    label: "Password",
    inline: true,
  });

  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (err, res) => {
      !!err && setError(true);
      console.log();
    });
  };

  return isUserLoggedIn ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <Grid style={{ marginTop: "100px" }}>
      <Helmet>
        <title>CMS | Login</title>
      </Helmet>

      <Grid.Column width={6} />
      <Grid.Column width={4}>
        <Form className={styles.loginForm} error={error} onSubmit={onSubmit}>
          {error && (
            <Message
              error={error}
              content="That username/password is incorrect. Try again!"
            />
          )}
          {usernameInput}
          {passwordInput}
          <Form.Button type="submit">Login</Form.Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
