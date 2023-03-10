import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/elements/burger.scss';
import Button from './Button';
import links from '../styles/elements/link.module.scss';

const Burger = () => {
  useEffect(() => {
    const hamb = document.querySelector('#hamb');
    const popup = document.querySelector('#popup');
    hamb.addEventListener('click', open);
    popup.addEventListener('click', open);
    return () => {
      hamb.removeEventListener('click', open);
      popup.removeEventListener('click', open);
    };
  });

  const open = (e) => {
    const popup = document.querySelector('#popup');
    const hamb = document.querySelector('#hamb');
    popup.classList.toggle('open');
    hamb.classList.toggle('open');
  };

  return (
    <>
      <div className="hamb">
        <div className="hamb__field" id="hamb">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="popup" id="popup">
        <div className="menu__link">
          <div className="link-block">
            <Link className={links.link} to="/">
              <span>Home</span>
            </Link>
          </div>
          <div className="link-block">
            <Link className={links.link} to="/blogs">
              <span>Blog</span>
            </Link>
          </div>
          <div className="link-block">
            <Link className={links.link} to="/about-us">
              <span>About Us</span>
            </Link>
          </div>
          <div className="link-block">
            <Link className={links.link} to="/contact">
              <span>Contact Us</span>
            </Link>
          </div>
          {/* Button */}
          <div className="link-block">
            <Button text="Subscribe" classes="button button__white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
