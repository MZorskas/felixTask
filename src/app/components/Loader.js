import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    flexGrow: 1,
    height: '100%',
  },
}));

function Loader({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <p>{text}</p>
    </div>
  );
}

export default Loader;
