import React from 'react';
import './index.css';

const STYLES = [
  'btn--primary-solid',
  'btn--primary--outline',
  'btn--banner-solid',
];

const SIZES = ['btn--medium', 'btn--small', 'btn--large'];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  id,
  isFavorite,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
}

// function Button({ center, contactType, children }) {
//   const classes = center ? `ContactBlock center` : 'ContactBlock';
//   return (
//     <div className={classes}>
//       <div className="Black-box">{contactType}</div>
//       {children}
//     </div>
//   );
// }

export default Button;
