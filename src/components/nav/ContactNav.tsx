import { Link } from "react-router-dom";

const ContactNav = () => {
  return (
    <Link
      to="/contact"
      className="text-foreground hover:text-primary transition-colors duration-200 block py-2"
    >
      Contact
    </Link>
  );
};

export default ContactNav;
