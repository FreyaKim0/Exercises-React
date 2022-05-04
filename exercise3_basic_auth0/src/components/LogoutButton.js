import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <button onClick={() => logout()}>Auth0 Logout</button>
      </div>
    )
  );
};

export default LogoutButton;
