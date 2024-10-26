import React from "react";
import Logo from "../Logo";
import { headerData } from "./header.data";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { ROUTES } from "@/constants/routes";
import { useMediaQuery } from "react-responsive";
import Burger from "./Burger";
import MobileHeader from "./MobileHeader/MobileHeader";

const Header = () => {
  const isTablet = useMediaQuery({ maxWidth: 768 });

  console.log(isTablet);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <div className="header__left">
            {!isTablet && <Logo />} {isTablet && <Burger />}
          </div>
          {!isTablet && (
            <div className="header__center">
              <ul className="header__list">
                {headerData.list.map(({ id, title, path }) => (
                  <li key={id}>
                    <Link className="header__list-link" to={path}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="header__right">
            <Button
              color={isTablet ? "#fff" : ""}
              background={isTablet ? "#5c74f1" : ""}
              title={headerData.buttonTitle}
              route={ROUTES.TEST}
            />
          </div>
        </div>
      </div>
      <MobileHeader />
    </header>
  );
};

export default Header;
