import {
  Typography,
  Container,
  Grid,
  Button,
  CssBaseline,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

//Craete Hook
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  CardMedia: {
    paddingTop: "56.25%",
  },
  CardContent: {
    flexGrow: 1,
  },
  footer:{
    backgroundColor: theme.palette.background.paper,
      padding:'50px 0',
      textAlign:'center'
  }
}));

const Item2 = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
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
                <Button variant="contained" color="primary">
                  All Furnitures
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  More To See
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(() => (
            <Grid item key={cards}xs={12}sm={6}md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.CardMedia}
                  image="https://source.unsplash.com/random"
                />

                <CardContent className={classes.CradContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit minus ducimus dolore ipsa ad dolorem
                    doloribus. Aut architecto accusamus dolore enim numquam
                    deleniti.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer className={classes.footer}>
                <Typography variant="h6"align="center"gutterBottom>
                    Blog
                </Typography>
                <Typography variant="subtitle"align="center"color="textSecondary"justify="center">
                    All Rights Reserved @soham
                </Typography>
      </footer>
    </>
  );
};

export default Item2;
