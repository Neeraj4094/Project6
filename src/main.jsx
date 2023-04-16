import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { Auth0Provider } from "@auth0/auth0-react";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Auth0Provider
  //   domain="dev-kor3unegmdd67yjm.us.auth0.com"
  //   clientId="qFlm1ujdUObgIaGtfbb8jobwUHDbJ5DD"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >

  // </Auth0Provider>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
