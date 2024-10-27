import { ROUTES } from '@/constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import { logoData } from './logo.data';

const Logo = ({ blue = false }) => {
  return blue ? (
    <Link className="logo-blue" to={ROUTES.HOME}>
      <img src="/icons/logo-blue.svg" alt="logo" />
      <span>{logoData.title}</span>
    </Link>
  ) : (
    <Link className="logo-white" to={ROUTES.HOME}>
      <img src="/icons/logo-white.svg" alt="logo" />
      <span>{logoData.title}</span>
    </Link>
  );
};

export default Logo;
