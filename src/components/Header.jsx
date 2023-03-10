import { Link } from 'react-router-dom';
import Burger from '../elements/Burger';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import styles from '../styles/components/header.module.scss';
import links from '../styles/elements/link.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}
        <Logo />
        {/* Navigation */}
        <div className={styles.block}>
          <navigation className={styles.nav}>
            <Link className={links.link} to="/">
              <span>Home</span>
            </Link>
            <Link className={links.link} to="/blogs">
              <span>Blog</span>
            </Link>
            <Link className={links.link} to="/about-us">
              <span>About Us</span>
            </Link>
            <Link className={links.link} to="/contact">
              <span>Contact Us</span>
            </Link>
          </navigation>
          {/* Button */}
          <Button text="Subscribe" classes="button button__white" />
        </div>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
