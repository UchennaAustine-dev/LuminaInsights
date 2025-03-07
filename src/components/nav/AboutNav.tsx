import { Link } from "react-router-dom";

const AboutNav = () => {
  return (
    <Link
      to="/about"
      className="text-foreground hover:text-primary transition-colors duration-200 block py-2"
    >
      About
    </Link>
  );
};

export default AboutNav;
