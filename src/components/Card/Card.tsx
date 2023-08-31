import { ChangeEvent, useState } from "react";
import { Data } from "../../data";

function Card(props: Data): JSX.Element {
  const [backGroundColor, setBackGroundColor] = useState<string>("black");
  const [colorAdded, setColorAdded] = useState<boolean>(false);
  const options: string[] = ["black", "red", "green"];

  const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setBackGroundColor(event.target.value);
  };
  const AddColorInputHandler = (event) => {
    if (event.key === "Enter") options.push(event.target.value);
    console.log(options);
    setColorAdded(!colorAdded);
  };

  return (
    <>
      <div id="card" style={{ backgroundColor: backGroundColor }}>
        <h1>{props.title}</h1>
        <img src={props.imgSrc} />
        <p>{props.text}</p>
      </div>
      <select onChange={onOptionChangeHandler}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <input
        type="text"
        placeholder="Add a color to the options"
        onKeyDown={AddColorInputHandler}
      />
    </>
  );
}
export default Card;
