import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-5cs0hy1wf8diredz.us.auth0.com"
      clientId="cUrXx3buaoWOt8D1wXGiLQTMOZSrIf3l"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/gallery`,
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
