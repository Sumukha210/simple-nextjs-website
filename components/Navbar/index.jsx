import navStyles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.container}>
        <ul className={navStyles.navMenu}>
          {navLinks.map(({ name, path }) => (
            <li className={navStyles.navLink} key={name}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "about",
    path: "/about",
  },

  {
    name: "contact us",
    path: "/contact",
  },
];
