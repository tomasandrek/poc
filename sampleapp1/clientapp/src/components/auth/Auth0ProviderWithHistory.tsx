import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

interface MyProps { }

const Auth0ProviderWithHistory = (props: React.PropsWithChildren<MyProps>) => {
  //const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  //const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
        audience="https://localhost:7289"
        domain="dev-o0puee4o.eu.auth0.com"
        clientId="qiEopV8nMv8FnQKFctboyGlxdHnmtdg2"
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;