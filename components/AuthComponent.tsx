// components/AuthComponent.js

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

function AuthComponent() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

export default AuthComponent;
