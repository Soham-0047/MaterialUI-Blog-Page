import React from 'react'
import { CssBaseline, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'
const Item1 = () => {
    const useStyles = makeStyles({
        root:{
            padding:'10 20',
            display:'flex',
            justifyContent:'space-evenly',
        }
    })
    const classes = useStyles();
  return (
      <>
      <CssBaseline/>
    <Grid container spacing={2}xs={12} wrap className={classes.root}>
        <Typography xs={3}>
            <Card/>
        </Typography>
        <Typography xs={3}>
            <Card/>
        </Typography>
        <Typography xs={3}>
            <Card/>
        </Typography>
        
        
    </Grid>
    </>
  )
}

export default Item1