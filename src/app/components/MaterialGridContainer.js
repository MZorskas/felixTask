import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 1120,
    margin: 0,
    padding: '0px 25px',
  },
});

function MaterialGridContainer({ children }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={5}>
      {children}
    </Grid>
  );
}

export default MaterialGridContainer;
