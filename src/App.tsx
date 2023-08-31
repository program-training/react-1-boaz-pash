import "./App.css";
import Card from "./components/Card/Card";
// import { Example } from "./components/Example/Example";
import Text from "./components/Text/Text";
import data from "./data";
function App() {
  
  return (
    <>
      <Text />
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            imgSrc={item.imgSrc}
            text={item.text}
          />
        );
      })}
    </>
  );
}

export default App;
