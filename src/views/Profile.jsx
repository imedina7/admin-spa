import React, { useEffect } from "react";

import { useOktaAuth } from "@okta/okta-react";
export default function Profile() {
  const { authState, oktaAuth } = useOktaAuth();
  useEffect(() => {
    async function authenticate() {
      if (!authState) return;

      if (!authState.isAuthenticated) {
        await oktaAuth.signInWithRedirect();
      }
    }
    authenticate();
  }, [authState, oktaAuth]);

  if (!authState?.isAuthenticated) {
    return <div>Please wait while we sign you in</div>;
  }
  return <div>Profile</div>;
}
