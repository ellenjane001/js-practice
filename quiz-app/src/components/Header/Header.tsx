import UseAppStore from '@/utils/UseAppStore'
import { Button, Grid, Switch } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Header = () => {
    const setTheme = UseAppStore(state => state.setTheme)
    useEffect(() => {
        if (localStorage.getItem("theme") == "true") {
            setTheme(true)
        } else {
            setTheme(false)
        }
    }, [])
    const handleChange = () => {
        if (localStorage.getItem("theme") == "true") {
            localStorage.setItem("theme", "false")
            setTheme(false)
        }
        else {
            localStorage.setItem("theme", "true")
            setTheme(true)
        }
    }
    const theme = UseAppStore(state => state.theme)
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
    return (
        <>
            <Grid container>
                <Grid item> <Button variant="contained"><Link href="/">home</Link></Button></Grid>
                <Grid item><Button variant="contained"><Link href='/themes'>themes</Link></Button></Grid>
                <Grid item> <Switch {...label} onChange={handleChange} checked={theme}/></Grid>
            </Grid>

        </>
    )
}

export default Header