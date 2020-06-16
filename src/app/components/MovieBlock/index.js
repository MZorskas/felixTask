import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import content from '../../../content/';
import authentication from '../../../authentication';

function MovieBlock({
  children,
  title,
  placeHolder,
  movieId,
  isFavorite,
  toggleFavorite,
}) {
  const onClick = () => toggleFavorite(movieId);

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
          {isFavorite ? 'Remove' : 'Favorite'}
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps(state, { movieId }) {
  // console.log('MovieBlock, mapStateToProps', state);
  return {
    isFavorite: content.selectors.isFavoriteById(state, movieId),
  };
}

function mapDispatchToProps(dispatch) {
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  return {
    toggleFavorite: (id) =>
      dispatch({ type: content.types.TOGGLE_FAVORITE, id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBlock);
