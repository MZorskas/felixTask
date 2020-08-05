import React from 'react';
import useStyles from './styles.jsx';
import { Link } from 'react-router-dom';

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  form,
  to,
  navigationLink,
}) {
  const classes = useStyles();

  const checkButtonSize = () => {
    if (buttonSize === 'small') {
      return classes.BtnSmall;
    } else if (buttonSize === 'large') {
      return classes.BtnLarge;
    } else {
      return classes.BtnMedium;
    }
  };

  const checkButtonStyle = () => {
    if (buttonStyle === 'outline') {
      return classes.BtnOutline;
    } else {
      return classes.BtnSolid;
    }
  };

  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={`${classes.Btn} ${checkButtonSize()} ${checkButtonStyle()} ${
        navigationLink && classes.NavigationLinkBtn
      }`}
      onClick={onClick}
      type={type}
      to={to}
      form={form}
    >
      {children}
    </Tag>
  );
}

export default Button;
