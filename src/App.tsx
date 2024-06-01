import * as React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import * as hooks from "./hooks";

import "./App.css";

export function App(): React.JSX.Element {
  const counter = hooks.useCounter();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button
        onClick={() => {
          counter.increment();
        }}
      >
        <Icon icon={icons.faRefresh} />
      </button>
      <div style={{ margin: "2px 2px 2px 12px" }}>{counter.value()}</div>
    </div>
  );
}
