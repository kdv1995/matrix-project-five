import s from "../Button/Button.module.scss";
const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={s.CreateMatrix}>
      {title}
    </button>
  );
};

export default Button;
