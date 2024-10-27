import Logo from '@/components/Logo';
import React from 'react';
import { mobileData } from './mobile.data';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '@/components/UI/Button';
import { IoMdClose } from 'react-icons/io';

const MobileHeader = () => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__wrap">
        <div className="mobile-menu__body">
          <div className="mobile-menu__top">
            <Logo blue />
            <div className="mobile-menu__close">
              <IoMdClose width={15} height={15} />
            </div>
          </div>
          <div className="mobile-menu__center">
            <ul className="mobile-menu__list">
              {mobileData.list.map(({ id, title, path, secondList }) =>
                secondList ? (
                  <li key={id}>
                    <div className="mobile-menu__dropdown-li">
                      <Link className="mobile-menu__link" to={path}>
                        {title}
                      </Link>
                      <IoIosArrowDown />
                    </div>

                    <ul className="mobile-menu__dropdown">
                      {secondList.map(({ id, title, path }) => (
                        <li key={id}>
                          <Link
                            key={id}
                            className="mobile-menu__dropdown-link"
                            to={path}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={id}>
                    <Link className="mobile-menu__link" to={path}>
                      {title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mobile-menu__bottom">
            <Button
              color="#fff"
              background="#5c74f1"
              route={mobileData.btnPath}
              title={mobileData.btnTitle}
            />
          </div>
        </div>
        <div className="mobile-menu__contacts">
          <ul className="mobile-menu__contacts-list">
            {mobileData.links.map(({ id, title, path }) => (
              <li key={id}>
                <Link className="mobile-menu__contacts-link" to={path}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
