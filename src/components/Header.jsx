import Button from '../elements/Button';
import '../styles/components/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"> &#123;Finsweet</div>
        <Button text="Subscribe" classes="button button__white" />
      </div>
    </header>
  );
};

export default Header;
