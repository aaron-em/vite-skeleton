import * as React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import * as hooks from "./hooks";
import { FlexBox } from "./components";

import "./App.css";

export function App(): React.JSX.Element {
  const counter = hooks.useCounter();

  return (
    <FlexBox direction="column">
      <FlexBox style={{ margin: "2px 2px 12px 2px" }}>
        <button
          style={{ width: "3rem" }}
          onClick={() => {
            counter.increment();
          }}
        >
          <Icon icon={icons.faRefresh} />
        </button>
        <div style={{ margin: "2px 2px 2px 12px" }}>{counter.value()}</div>
      </FlexBox>
    </FlexBox>
  );
}
