import { Route, Routes } from "react-router";

import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";

import "./App.css";
import Dashboard from "./views/Dashboard";
import Chat from "./views/Chat";
import MainLayout from "./layouts/MainLayout";
import NoPage from "./views/NoPage";
import Profile from "./views/Profile";
import { issuer, clientId, redirectUri } from "./config";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.oktaAuth = new OktaAuth({
      issuer,
      clientId,
      redirectUri,
    });

    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      window.location.replace(
        toRelativeUrl(originalUri || "/", window.location.origin)
      );
    };
  }

  render() {
    return (
      <Security
        oktaAuth={this.oktaAuth}
        restoreOriginalUri={this.restoreOriginalUri}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="callback" element={<LoginCallback />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Security>
    );
  }
}
