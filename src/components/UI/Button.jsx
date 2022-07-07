import s from "./Button.module.scss";
const Button = ({ title, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={s.Button}>
        {title}
      </button>
    </>
  );
};

export default Button;
