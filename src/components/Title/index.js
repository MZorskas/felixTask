import React from 'react';
import './index.css';

function Title({ children, level, banner }) {
  const Tag = `h${level}`;
  const classes = banner ? `title title--banner` : 'title';

  return <Tag className={classes}>{children}</Tag>;
}

export default Title;
