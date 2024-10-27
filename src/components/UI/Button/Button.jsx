import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ route, title, color = '#5c74f1', background = ' #fff' }) => {
  return (
    <Link
      className="link"
      style={{ color: color, background: background }}
      to={route}
    >
      {title}
    </Link>
  );
};

export default Button;
