import Layout from "@/components/Layout/Layout";
import { Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const home = () => {
    return (<>
        <Layout>

            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <h1>Hello, World!</h1>
                    </motion.div>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="info"> <Link href="/">Return to home</Link></Button>
                </Grid>

            </Grid>

        </Layout>
    </>);
}

export default home;