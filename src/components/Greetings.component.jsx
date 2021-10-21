import React, {useState} from 'react';

const GreetingsComponent = () => {

  const [change, setChange] = useState(false);

  const changeTheState = () => {
    setChange(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>

      {!change && <p>good to see you</p>}
      {change && <p>Changed magically</p>}
      <button onClick={changeTheState}>Change it</button>
    </div>
  );
};

export default GreetingsComponent;
