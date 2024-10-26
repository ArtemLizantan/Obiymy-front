import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <main className="rounded-xl bg-white">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
