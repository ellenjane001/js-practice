import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

export default NextAuth({
  providers: [
    KeycloakProvider({
        clientId: process.env.KEYCLOAK_ID!,
        clientSecret: process.env.KEYCLOAK_SECRET!,
        issuer: process.env.KEYCLOAK_ISSUER,
      })
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
  jwt: {},
  pages: {},
  callbacks: {},
  events: {},
  // Enable debug messages in the console if you are having problems
  debug: false,
})