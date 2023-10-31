import 'nextra-theme-docs/style.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App;