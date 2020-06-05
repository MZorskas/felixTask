import React, { useState } from 'react';
import Modal from 'react-modal';
import './index.scss';
import Button from '../Button';

function MovieContainer({
  children,
  title,
  toggleFavorite,
  isFavorite,
  placeHolder,
  video,
}) {
  const [modal, setModal] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      'background-color': 'red',
    },
  };

  const toggleModal = () => {
    setModal(!modal);
    console.log('MODAL', modal);
  };

  return (
    <div className="movieContainer">
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <iframe src={video} frameborder="0" allowfullscreen="true" />
      </Modal>
      <div className="img-container">
        <img className="" src={placeHolder} alt="Movie" loading="lazy" />
      </div>
      <div className="movie-info">
        <h1>{title}</h1>
        <p>{children}</p>
        <div className="buttons">
          <Button buttonSize="btn--large" onClick={() => toggleModal()}>
            Watch
          </Button>
          <Button
            buttonSize="btn--large"
            onClick={toggleFavorite}
            buttonStyle={isFavorite && 'btn--primary--outline'}
          >
            {!isFavorite ? 'Favorite' : 'Remove'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
