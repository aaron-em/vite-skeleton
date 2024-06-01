import * as React from "react";

type FlexBoxProps = {
  direction?: React.CSSProperties["flexDirection"];
  style?: Partial<Omit<React.CSSProperties, "display" | "flexDirection">>;
  children: React.ReactElement | React.ReactElement[] | null;
};

export function FlexBox({
  direction = "row",
  style = {},
  children = null,
}: FlexBoxProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
