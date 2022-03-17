import { Typography, Container,Grid,Button, CssBaseline,Card,CardMedia,CardContent} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core"; 

//Craete Hook
const useStyles = makeStyles((theme)=>({
        container:{
            backgroundColor:theme.palette.background.paper,
            padding:theme.spacing(8,0,6)
        },
        buttons:{
            marginTop:'40px'
        }
}))
const Item2 = () => {
    const classes = useStyles();
    return (
        <>
        <CssBaseline/>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Blog Explore
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        World's Largest Furniture Shop With Brand New Furnitures
                    </Typography>

                    <div className={classes.buttons}>
                        <Grid container spacing={3} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">All Furnitures</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">More To See</Button>
                            </Grid>
                        </Grid>
                    </div>


                </Container>
            </div>

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia className={classes.CardMedia}
                            image="https://source.unsplash.com/random"/>

                            <CardContent className={classes.CradContent}>
                                <Typography gutterBottom variant="h5">
                                    
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>




        </>
    );
};

export default Item2;
