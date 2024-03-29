import Layout from '@/components/Layout/Layout'
import { Button, Grid } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'


export default function Home() {
  const { data: session } = useSession()

  return <>
    <Layout>
      {session ?
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container>
              <Grid item>
               <Link href="/home">Home</Link> 
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item>Signed in as {session.user?.email}</Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => signOut()}>Sign out</Button>
          </Grid>
        </Grid>
        :
        <Grid container direction="column" spacing={2}>
          <Grid item>Not signed in</Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => signIn()}>Sign in</Button>
          </Grid>
        </Grid>}

    </Layout>
  </>


}
