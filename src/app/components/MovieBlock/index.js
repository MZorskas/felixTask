import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function MovieBlock({
  children,
  title,
  placeHolder,
  movieId,
  content,
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
          buttonStyle={
            content.favorites.includes(movieId) && 'btn--primary--outline'
          }
        >
          {!!content.favorites.includes(movieId) ? 'Remove' : 'Favorite'}
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps({ content }) {
  // console.log('MovieBlock, mapStateToProps', content);
  return {
    content,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  return {
    toggleFavorite: (id) => dispatch({ type: 'TOGGLE_FAVORITE', id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBlock);
