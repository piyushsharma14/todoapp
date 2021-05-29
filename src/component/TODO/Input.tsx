import React from "react";
import Childinput from "./input1";
const inputComponent = (props: {
  data: string | number | readonly string[] | undefined;
  value: React.ChangeEventHandler<HTMLInputElement> | undefined;
  loading: boolean;
}) => {
  return (
    <div>
      <h3 className="heading">TO DO LIST</h3>
      <Childinput
        input1={props.data}
        input2={props.value}
        input3={props.loading}
      />
    </div>
  );
};

export default inputComponent;
