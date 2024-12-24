import title from "./title.module.css";

function Title({ text1, text2 }) {
  return (
    <div className={title.container}>
      <p>
        {text1} <span>{text2}</span>{" "}
      </p>
      <br />
    </div>
  );
}

export default Title;
