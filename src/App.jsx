import { useState } from "react";

// Write your Color component here
const Color = (props) => {
  return <div 
    className={props.color}
    onClick={() => props.setSelectedColor(props.color)} 
  ></div>
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{
      /* colors go here */
        <div id="colors-list">
          <Color color="orange" setSelectedColor={setSelectedColor}/>
          <Color color="yellow" setSelectedColor={setSelectedColor}/>
          <Color color="green" setSelectedColor={setSelectedColor}/>
        </div>
      }</div>
    </div>
  );
};

export default App;
