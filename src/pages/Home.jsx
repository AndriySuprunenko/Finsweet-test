import styles from '../styles/pages/home.module.scss';
import backgroundImage from '../images/banners/home-banner.png';
import { Link } from 'react-router-dom';
import Button from '../elements/Button';
import links from '../styles/elements/link.module.scss';

const Home = () => {
  return (
    <div className="wrapper">
      {/* Banner container */}
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
            <h2 className={styles.subtitle}>
              Posted on <span className={styles.subtitle__bold}>startup</span>
            </h2>
            {/* title */}
            <h1 className={styles.title}>
              Step-by-step guide to choosing great font pairs
            </h1>
            {/* author */}
            <h3 className={styles.author}>
              By{' '}
              <Link className={links.link__yellow} to="/author">
                James West
              </Link>{' '}
              | May 23, 2022
            </h3>
            {/* text */}
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            {/* button */}
            <div className={styles.button}>
              <Button text="Read More >" />
            </div>
          </div>
        </div>
      </div>
      {/* Posts */}
      <section className={styles.section}>
        <div className={styles.post}>
          <span className={styles.post_title}>Featured Post</span>
        </div>
        <div className={styles.posts}>
          <span className={styles.post_title}>
            <div>All Posts</div>
            <Link className={links.link__purple} to="/author">
              View All
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
