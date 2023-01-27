import { Link } from 'react-router-dom';
import styles from '../styles/elements/logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.link} to="/">
        <span>&#123;Finsweet</span>
      </Link>
    </div>
  );
};

export default Logo;
