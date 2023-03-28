import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak-fork/ssr'
import cookie from 'cookie'
import { IncomingMessage } from 'http'
const keycloakCfg = {
  realm: 'http://localhost:8080/realm/Test_Realm',
  url: '',
  clientId: 'ssr',
}
interface InitialProps {
  cookies: unknown
}
export default function App({ Component, pageProps,cookies }: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  )
}

function parseCookies(req: IncomingMessage) {
  return cookie.parse(req.headers.cookie || '')
}

App.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: context.ctx.req ? parseCookies(context.ctx.req) : {},
  }
}

