import { transition } from "@/components/Transiton/Transition";
import { Link } from "react-router-dom";

const Test = () => {
  return <Link to="/test">Page1</Link>;
};

export default transition(Test);
