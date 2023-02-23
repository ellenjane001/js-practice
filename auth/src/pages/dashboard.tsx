import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../contexts/auth-context'
const Dashboard = () => {
    const router = useRouter()
    const authContext = useContext(AuthContext)
    console.log(authContext)
    useEffect(() => {
        authContext.isUserAuthenticated()
            ? router.push("/dashboard")
            : router.push("/");
    })
    return (
        <>
            <Head>
                <title>
                    Dashboard | MarsJupyter
                </title>
            </Head>


        </>
    )
}


export default Dashboard;