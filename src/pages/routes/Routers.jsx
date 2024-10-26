import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Test from "../Test/Test";
import Test2 from "../Test2/Test2";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test2 />} />
      </Routes>
    </AnimatePresence>
  );
};

const Routers = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default Routers;
