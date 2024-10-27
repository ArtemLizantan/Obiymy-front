import Header from '@/components/Header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ isFooterInView }} />
      </main>
    </>
  );
};

export default Layout;
