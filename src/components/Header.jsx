import { Link } from 'react-router-dom';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import styles from '../styles/components/header.module.scss';
import '../styles/elements/link.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}
        <Logo />
        {/* Navigation */}
        <div className={styles.block}>
          <navigation className={styles.nav}>
            <Link className='link' to="/">
              <span>Home</span>
            </Link>
            <Link className='link' to="/blogs">
              <span>Blog</span>
            </Link>
            <Link className='link' to="/about-us">
              <span>About Us</span>
            </Link>
            <Link className='link' to="/contact">
              <span>Contact Us</span>
            </Link>
          </navigation>
          {/* Button */}
          <Button text="Subscribe" classes="button button__white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
