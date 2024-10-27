import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Test from '../Test/Test';
import Test2 from '../Test2/Test2';
import Layout from '@/layout/Layout';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Test />} />
          <Route path="/test" element={<Test2 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const Routers = () => {
  return <AppRoutes />;
};

export default Routers;
