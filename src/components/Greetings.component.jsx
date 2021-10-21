import React, {useState} from 'react';
import OutputComponent from "./Output.component";

const GreetingsComponent = () => {

  const [change, setChange] = useState(false);

  const changeTheState = () => {
    setChange(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>

      {!change && <OutputComponent>good to see you</OutputComponent>}
      {change && <OutputComponent>Changed magically</OutputComponent>}
      <button onClick={changeTheState}>Change it</button>
    </div>
  );
};

export default GreetingsComponent;
