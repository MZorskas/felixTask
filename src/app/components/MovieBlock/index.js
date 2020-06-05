import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
function MovieBlock({
  children,
  title,
  placeHolder,
  onClick,
  isFavorite,
  movieId,
}) {
  // const [favorite, setFavorite] = React.useState([]);
  // const addFavorite = (event) => {
  //   console.log(favorite);
  //   // console.log(movies);
  //   let id = event.target.parentElement.parentElement.id;
  //   console.log(id);
  //   setFavorite([...favorite, favorite.push(id)]);

  //   console.log(favorite);
  //   // setFollowList(event.target.parentElement.parentElement.id);
  // };

  return (
    <div className="movieBlock">
      <div className="img-container">
        <Link to={{ pathname: `/content/${movieId}`, state: { movieId } }}>
          <img className="" src={placeHolder} alt={`${title} img`} />
        </Link>
      </div>
      <div className="movie-info">
        <Link to={{ pathname: `/content/${movieId}`, state: { movieId } }}>
          {title}
        </Link>
        {children}

        <Button
          buttonSize="btn--medium"
          onClick={onClick}
          buttonStyle={isFavorite && 'btn--primary--outline'}
        >
          {!isFavorite ? 'Favorite' : 'Remove'}
        </Button>
      </div>
    </div>
  );
}

export default MovieBlock;
