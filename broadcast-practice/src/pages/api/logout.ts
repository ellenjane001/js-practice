import type { NextApiRequest, NextApiResponse } from 'next';
import { BroadcastChannel } from 'broadcast-channel';
// import { getSession } from 'next-auth/client';
// import { destroySessionByToken } from '../../../utils/session';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Destroy the user's session (example using a custom session utility function)
    // const session = await getSession({ req });
    // if (!session) {
    //   res.status(400).send('User not logged in');
    //   return;
    // }
    // await destroySessionByToken(session.accessToken);

    // Notify other tabs that the user has logged out
    const channel = new BroadcastChannel('logout');
    channel.postMessage('user logged out');

    // Redirect the user to the login page
    res.redirect('/login');
  } catch (err) {
    console.error('Error destroying session:', err);
    res.status(500).send('Internal server error');
  }
}
