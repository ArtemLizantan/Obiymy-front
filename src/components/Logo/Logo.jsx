import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import { logoData } from './logo.data';
import logoBlue from '@/assets/icons/logo-blue.svg';
import logoWhite from '@/assets/icons/logo-white.svg';

const Logo = ({ blue = false }) => {
  return blue ? (
    <Link className="logo-blue" to={ROUTES.HOME}>
      <img src={logoBlue} alt="logo" />
      <span>{logoData.title}</span>
    </Link>
  ) : (
    <Link className="logo-white" to={ROUTES.HOME}>
      <img src={logoWhite} alt="logo" />
      <span>{logoData.title}</span>
    </Link>
  );
};

export default Logo;
