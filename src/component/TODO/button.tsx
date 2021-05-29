import React from "react";

const buttonComponent = (props: {
  data: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div>
      <button className="btn Addbutton" onClick={props.data}>
        ADD
      </button>
    </div>
  );
};

export default buttonComponent;
