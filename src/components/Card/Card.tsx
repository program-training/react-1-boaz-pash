import { ChangeEvent, useState } from "react";

function Card(): JSX.Element {
  const [backGroundColor, setBackGroundColor] = useState<string>("black");
  const options: string[] = ["black", "red", "green"];
  const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => [
    setBackGroundColor(event.target.value),
  ];
  return (
    <>
      <div id="card" style={{ backgroundColor: backGroundColor }}>
        <h1>Title</h1>
        <img src=""></img>
        <p>Here is the text!</p>
      </div> 
      <select onChange={onOptionChangeHandler}>
        {/* <option></option> */}
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
}
export default Card;
