import { Grid } from "@mui/material"
import Profile from "./Profile"
const MyApp = () => {
    return (
        <>

            <Grid container spacing={2}>
                <Grid item xs={6} md={12}>
                    <h1>Hello world</h1>
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Profile title="Brazilian Jiujutsu" desc="Originally came from japan" imgs="https://images.unsplash.com/photo-1624938518616-3be0add427d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Profile title="Taekwondo" desc="Martial Arts that uses kick rather than punching" imgs="https://images.unsplash.com/photo-1514050566906-8d077bae7046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Profile title="Judo" desc="More on slamming on your opponent to the ground" imgs="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                </Grid>
            </Grid>



        </>
    )
}

export default MyApp