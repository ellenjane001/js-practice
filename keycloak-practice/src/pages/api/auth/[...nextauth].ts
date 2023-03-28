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
  jwt: {
  },
  pages: {
  },
  callbacks: {
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
})