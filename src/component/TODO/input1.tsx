import React from "react";

const inputChild = (props: {
  input1: string | number | readonly string[] | undefined;
  input2: React.ChangeEventHandler<HTMLInputElement> | undefined;
  input3: boolean;
}) => {
  function loadItems(v: boolean) {
    if (v) {
      return (
        <h3 style={{ color: "rgb(12, 74, 85)", fontFamily: "Segoe UI" }}>
          Loading...
        </h3>
      );
    }
  }
  return (
    <div>
      <label htmlFor="input" className="itemlabel">
        Enter Item{" "}
      </label>
      <input
        className="item"
        value={props.input1}
        id="input"
        onChange={props.input2}
        autoFocus
      />
      <div>{loadItems(props.input3)}</div>
    </div>
  );
};
export default inputChild;
