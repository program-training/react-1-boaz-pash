import { useState } from "react";

function Text(): JSX.Element {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);
  const handelClick = (): void => {
    setIsTextVisible((prev) => !prev);
  };
  return (
    <div>
      {isTextVisible ? <div>This is text</div> : null}
      <button onClick={handelClick}>Text</button>
    </div>
  );
}
export default Text;
