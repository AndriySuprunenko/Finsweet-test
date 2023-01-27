// scss
import '../styles/elements/button.scss';

const Button = ({
  text = 'Default Text',
  classes = 'button',
  types = 'button',
}) => {
  return (
    <button typeof={types} className={classes}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
