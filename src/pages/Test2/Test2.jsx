import { transition } from "@/components/Transiton/Transition";
import { Link } from "react-router-dom";

const Test2 = () => {
  return <Link to="/">Test2</Link>;
};

export default transition(Test2);
