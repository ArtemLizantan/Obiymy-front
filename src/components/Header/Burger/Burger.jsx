import logo from '../../../assets/icons/logo-blue.svg';
import { motion } from 'framer-motion';

const Burger = ({ toggle }) => {
  return (
    <div onClick={toggle} className="burger">
      <img src={logo} alt="logo" />
      <div className="burger__icon">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
    </div>
  );
};

export default Burger;
