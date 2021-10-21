import React, {Fragment} from 'react';

const OutputComponent = (props) => {
  return (
    <Fragment>
      <p>{props.children}</p>
    </Fragment>
  );
};

export default OutputComponent;