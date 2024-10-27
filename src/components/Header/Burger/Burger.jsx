import React from 'react';

const Burger = () => {
  return (
    <div className="burger">
      <img src="/icons/logo-blue.svg" alt="logo" />
      <div className="burger__icon">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
    </div>
  );
};

export default Burger;
