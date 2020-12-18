import React, { Component, Ref } from "react";
import onClickOutside from "react-onclickoutside";
import Button from "../Button";
import FLexLayout from "../FlexLayout";
import SidePaneMenuItems from "../SidePaneMenuItems";

interface Props {
  style?: React.CSSProperties;
  show: Boolean;
  active: Boolean;
  onClickOutSide: Function;
}

class SidePane extends React.Component<Props> {
  handleClickOutside = (evt) => {
    const { onClickOutSide } = this.props;
    onClickOutSide();
  };

  itemsData = [
    {
      state: "active",
      iconName: "star.svg",
      title: "Featured Courses",
    },
    {
      state: "inactive",
      iconName: "book.svg",
      title: "Indian Polity",
    },
    {
      state: "inactive",
      iconName: "book.svg",
      title: "History & Geography",
    },
    {
      state: "inactive",
      iconName: "book.svg",
      title: "Economy, Environment and Science",
    },
    {
      state: "inactive",
      iconName: "book.svg",
      title: "NCERTs",
    },
    {
      state: "inactive",
      iconName: "book.svg",
      title: "Optional",
    },
    {
      title: "Miscellaneous",
      iconName: "Miscellaneous.svg",
      state: "inactive",
    },
  ];

  getDataJSX: Function = (): JSX.Element[] => {
    return this.itemsData.map((x, i) => {
      return (
        <SidePaneMenuItems
          className="menu-item"
          iconName={x.iconName}
          state={x.state}
          key={i}
          title={x.title}
        ></SidePaneMenuItems>
      );
    });
  };

  render() {
    const { show, active, onClickOutSide } = this.props;

    return (
      <FLexLayout
        rowORColumn="column"
        style={{
          display: show ? "flex" : "none",
          width: "300px",
          height: "100vh",
          backgroundColor: "#F9F9F9",
          position: "fixed",
          top: "0px",
          right: active ? "0px" : "-100%",
          transition: "1250ms",
        }}
      >
        <Button
          label="Login"
          style={{
            backgroundColor: "#01C5C4",
            height: "36px",
            marginTop: "20px",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        />

        <Button
          label="Register Now"
          style={{
            border: "1px solid #30475E",
            height: "36px",
            marginTop: "20px",
            color: "#30475E",
            backgroundColor: "#FFFFFF",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        />

        <SidePaneMenuItems
          state="inactive"
          className="menu-item"
          iconName="home.svg"
          title="Home"
        ></SidePaneMenuItems>

        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            marginLeft: "25px",
            marginTop: "32px",
            color: "#999999",
            letterSpacing: "0.2em",
            lineHeight: "14px",
          }}
        >
          {" "}
          CATEGORIES{" "}
        </div>

        {this.getDataJSX()}
      </FLexLayout>
    );
  }
}

export default onClickOutside(SidePane);
