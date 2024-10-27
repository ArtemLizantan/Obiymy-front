import logo from '../../../assets/icons/logo-blue.svg';

const Burger = () => {
  return (
    <div className="burger">
      <img src={logo} alt="logo" />
      <div className="burger__icon">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
    </div>
  );
};

export default Burger;
