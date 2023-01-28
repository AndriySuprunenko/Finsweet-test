// scss
import { Link } from 'react-router-dom';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import styles from '../styles/components/footer.module.scss';
import links from '../styles/elements/link.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.sectionTop}>
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
              <Link className={links.link} to="/privacy-policy">
                <span>Privacy Policy</span>
              </Link>
            </navigation>
          </div>
        </div>
        {/* Center */}
        <div className={styles.sectionCenter}>
          {/* Text */}
          <span className={styles.text}>
            Subscribe to our news letter to get latest updates and news
          </span>
          {/* Block Form */}
          <div className={styles.form}>
            {/* Input */}
            <input
              placeholder="Enter Your Email"
              type="text"
              className={styles.input}
            />
            {/* Button */}
            <Button text="Subscribe" />
          </div>
        </div>
        {/* Bottom */}
        <div className={styles.sectionBottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
