import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

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
  form,
  to,
}) {
  const Tag = to ? Link : 'button';
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Tag
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      to={to}
      form={form}
    >
      {children}
    </Tag>
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
