import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Context
import { ContentContext } from '../context/ContentContext';

//Components
import MoviesContainer from '../components/MoviesContainer';
import Button from '../components/Button';

const useStyles = makeStyles({
  NoFavorites: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function Favorites() {
  const classes = useStyles();
  const { favorites } = useContext(ContentContext);

  return (
    <React.Fragment>
      {favorites.length === 0 ? (
        <div className={classes.NoFavorites}>
          <h1 style={{ color: 'white' }}>You have no favorite movies!</h1>
          <Button to="/content" buttonStyle="solid">
            Find some!
          </Button>
        </div>
      ) : (
        <MoviesContainer />
      )}
    </React.Fragment>
  );
}

export default Favorites;
