import { OktaAuth } from "@okta/okta-auth-js";
import { Outlet } from "react-router-dom";

import Nav from "../components/layout/Nav";

export default function MainLayout({ oktaAuth }: {oktaAuth: OktaAuth}) {
  return (
    <>
      <div className="flex flex-col min-h-screen items-stretch">
        <Nav oktaAuth={oktaAuth} />
        <div className="flex-grow self-stretch">
          <Outlet />
        </div>
      </div>
    </>
  );
}
