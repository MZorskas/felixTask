import React from 'react';
import useStyles from './styles.jsx';
import Button from '../Button';
import Typography from '@material-ui/core/Typography';

function Banner({ placeHolder, title }) {
  const classes = useStyles();
  return (
    <div className={classes.BannerContainer}>
      <img src={placeHolder} alt="banner" />
      <div className={classes.BannerOverlay}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        <Button buttonStyle="solid" buttonSize="large">
          Get Access
        </Button>
      </div>
    </div>
  );
}

export default Banner;
