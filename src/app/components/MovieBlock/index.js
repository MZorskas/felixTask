import React, { useContext } from 'react';
import useStyles from './styles.jsx';
import { Link } from 'react-router-dom';

// Context
import { ContentContext } from '../../context/ContentContext';

// Components
import Button from '../Button';

// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function MovieBlock({ children, title, placeHolder, movieId }) {
  const classes = useStyles();
  const { favorites, toggleFavorite } = useContext(ContentContext);
  const isFavorite = favorites.includes(movieId);
  const Favorite = () => toggleFavorite(movieId, isFavorite);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={placeHolder}
        component="img"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Link to={{ pathname: `/content/${movieId}`, state: { movieId } }}>
          {title}
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
        <Button
          buttonSize="medium"
          onClick={Favorite}
          buttonStyle={isFavorite && 'outline'}
        >
          {isFavorite ? 'Remove' : 'Favorite'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default MovieBlock;
