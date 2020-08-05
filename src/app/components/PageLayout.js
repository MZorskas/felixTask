import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  App: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 0,
    overflowX: 'hidden',
  },
  Main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
  },
}));

function PageLayout({ children }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.App}>
        <Header />
        <main className={classes.Main}>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default PageLayout;
