import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <Link
      to="/"
      className="text-foreground hover:text-primary transition-colors duration-200 block py-2"
    >
      Home
    </Link>
  );
};

export default HomeNav;
