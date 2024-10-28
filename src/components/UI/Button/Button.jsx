import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';

const Button = ({ route, title, color = '#5c74f1', background = '#fff' }) => {
  const hoverRef = useRef(null);
  const buttonRef = useRef(null);
  const [isActive, setIsActive] = useState(false); // Состояние для активного класса

  const handleMouseEnter = () => {
    setIsActive(true); // Устанавливаем активный класс

    gsap.fromTo(
      hoverRef.current,
      {
        scaleY: 0,
        scale: 0.9,
        borderTopLeftRadius: '20vw',
        borderTopRightRadius: '20vw',
        transformOrigin: '50% bottom',
      },
      {
        scaleY: 1,
        scale: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        duration: 0.4,
        ease: 'power2.out',
      }
    );

    gsap.to(buttonRef.current, {
      scale: 0.5,
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.1,
          ease: 'power2.out',
        });
      },
    });
  };

  const handleMouseLeave = () => {
    setIsActive(false); // Убираем активный класс

    gsap.to(hoverRef.current, {
      scaleY: 0,
      scale: 0.9,
      borderTopLeftRadius: '20vw',
      borderTopRightRadius: '20vw',
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <Link
      className={`link ${isActive ? 'active' : ''}`} // Добавляем активный класс
      style={{
        color: color,
        background: background,
        overflow: 'hidden',
      }}
      to={route}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      {title}
      <div className="link__hover" ref={hoverRef} />
    </Link>
  );
};

export default Button;
