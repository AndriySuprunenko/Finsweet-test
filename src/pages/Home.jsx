import styles from '../styles/pages/home.module.scss';
import backgroundImage from '../images/banners/home-banner.png';
import { Link } from 'react-router-dom';
import Button from '../elements/Button';

const Home = () => {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        {/* banner */}
        <div
          className={styles.banner}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className={styles.content}>
            {/* subtitle */}
            <h2 className={styles.subtitle}>Posted on startup</h2>
            {/* title */}
            <h1 className={styles.title}>
              Step-by-step guide to choosing great font pairs
            </h1>
            {/* author */}
            <h3 className={styles.author}>
              By <Link className={styles.author__name}>James West</Link> | May
              23, 2022
            </h3>
            {/* text */}
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            {/* button */}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
