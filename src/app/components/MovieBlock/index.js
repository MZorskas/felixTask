import React from 'react';
import './index.scss';
import Button from '../Button';

function MovieBlock({
  children,
  title,
  placeHolder,
  href,

  onClick,
  isFavorite,
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
        <img className="" src={placeHolder} alt="Movie" />
      </div>
      <div className="movie-info">
        <a href={href}>{title}</a>
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
