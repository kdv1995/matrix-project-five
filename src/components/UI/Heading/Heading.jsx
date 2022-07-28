import s from "components/UI/Heading/Heading.module.scss";
const Heading = ({ title }) => {
  return <h1 className={s.Heading}>{title}</h1>;
};

export default Heading;
