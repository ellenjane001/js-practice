import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import Paper from '@mui/material/Paper'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Layout>
        <Header />
        <Paper sx={{ padding: 10 }} className={inter.className} >index</Paper>
      </Layout>
    </>
  )
}
