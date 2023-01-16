import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Profile = (props) => {
    const { title, desc, imgs } = props //deconstructor
    return (<div>
        <Card sx={{ maxWidth: 345, height: 700 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={imgs}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>)
}

export default Profile