import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import content from '../../../content/';
import { bindActionCreators } from 'redux';

function MovieBlock({
  children,
  title,
  placeHolder,
  movieId,
  isFavorite,
  toggleFavorite,
}) {
  const onClick = () => toggleFavorite(movieId, isFavorite);

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

const enhance = connect(
  (state, { movieId }) => {
    return {
      isFavorite: content.selectors.isFavoriteById(state, movieId),
    };
  },
  (dispatch) => {
    return {
      toggleFavorite: bindActionCreators(
        content.actions.toggleFavorite,
        dispatch
      ),
    };
  }
);

export default enhance(MovieBlock);
