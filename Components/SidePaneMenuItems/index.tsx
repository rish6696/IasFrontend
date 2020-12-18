import React from "react";
import FLexLayout from "../FlexLayout";

interface Props {
  style?: React.CSSProperties;
  title: string;
  iconName: string;
  state: "active" | "inactive"|string;
  className : string;
}

function SidePaneMenuItems({
  title,
  iconName,
  style,
  state,
  className
}: Props) {
  const backgroundColor =
    state == "active" ? "#ffffff" : "#F9F9F9";

  const fontWeight =
    state == "active" ? 600 : "normal";

    const boxShadow = state=="active" ? '0px 10px 30px rgba(0, 0, 0, 0.06)' : "";

  return (
    <FLexLayout
      style={{ ...style, backgroundColor,boxShadow }}
      rowORColumn="row"
      className={className}
    >
      <img
        style={{ height: "20px", width: "20px",marginLeft:'25px' }}
        src={`/${iconName}`}
      ></img>
      <div
        style={{
          marginLeft: "18px",
          color: "#2F2F2F",
          fontWeight: fontWeight,
          fontSize: "16px",
        }}
      >
        {" "}
        {title}{" "}
      </div>
    </FLexLayout>
  );
}

export default SidePaneMenuItems;
