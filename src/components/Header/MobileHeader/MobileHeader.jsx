import Logo from '@/components/Logo';
import { mobileData } from './mobile.data';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import Button from '@/components/UI/Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileHeader = ({ open, setOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const dropdownVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  const arrowVariants = {
    open: {
      rotate: 180,
      scale: 1.5,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    closed: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateX: -20 },
    visible: { opacity: 1, translateX: 0 },
    exit: { opacity: 0 },
  };

  return (
    open && (
      <motion.div
        className="mobile-menu"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="mobile-menu__wrap">
          <div className="mobile-menu__body">
            <div className="mobile-menu__top">
              <Logo blue />
              <div onClick={handleCloseMenu} className="mobile-menu__close">
                <IoMdClose width={15} height={15} />
              </div>
            </div>
            <div className="mobile-menu__center">
              <ul className="mobile-menu__list">
                {mobileData.list.map(({ id, title, path, secondList }) =>
                  secondList ? (
                    <li key={id}>
                      <div
                        onClick={handleOpenDropdown}
                        className="mobile-menu__dropdown-li"
                      >
                        <div className="mobile-menu__link">{title}</div>
                        <motion.div
                          variants={arrowVariants}
                          initial="closed"
                          animate={openDropdown ? 'open' : 'closed'}
                          exit="closed"
                        >
                          <IoIosArrowDown />
                        </motion.div>
                      </div>

                      <AnimatePresence mode="wait">
                        {openDropdown && (
                          <motion.ul
                            className="mobile-menu__dropdown"
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                          >
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={{
                                visible: {
                                  transition: {
                                    staggerChildren: 0.2,
                                  },
                                },
                              }}
                            >
                              {secondList.map(({ id, title, path }) => (
                                <motion.li
                                  className="mobile-menu__dropdown-link"
                                  key={id}
                                  variants={itemVariants}
                                >
                                  <Link to={path}>{title}</Link>
                                </motion.li>
                              ))}
                            </motion.div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
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
      </motion.div>
    )
  );
};

export default MobileHeader;
