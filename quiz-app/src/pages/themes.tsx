import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import { Paper } from '@mui/material'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const themes = () => {
  return (
    <>
      <Layout>
        <Header />
        <Paper sx={{padding:10}} className={inter.className}>theme</Paper>
      </Layout>
    </>
  )
}

export default themes