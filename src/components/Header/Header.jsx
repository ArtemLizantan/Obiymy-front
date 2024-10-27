import Logo from '../Logo';
import { headerData } from './header.data';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { ROUTES } from '@/constants/routes';
import { useMediaQuery } from 'react-responsive';
import Burger from './Burger';
import MobileHeader from './MobileHeader/MobileHeader';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 0px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20, // Немного увеличиваем для лучшего открытия
        restDelta: 1,
        damping: 50, // Управляем, насколько пружина будет "прыгать"
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        type: 'spring',
        stiffness: 150, // Снижаем жесткость для более плавного закрытия
        damping: 20, // Увеличиваем демпфирование, чтобы избежать "прыжков"
        mass: 0.5, // Настраиваем массу для более медленного закрытия
      },
    },
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <div className="header__left">
            {!isTablet && <Logo />} {isTablet && <Burger toggle={toggleOpen} />}
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
              color={isTablet ? '#fff' : ''}
              background={isTablet ? '#5c74f1' : ''}
              title={headerData.buttonTitle}
              route={ROUTES.TEST}
            />
          </div>
        </div>
      </div>

      {isTablet && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-header"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebar}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#fff',
              }}
            >
              <MobileHeader setOpen={toggleOpen} open={isOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
