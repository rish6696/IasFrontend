import React, {
  Component,
  Ref,
  useEffect,
  useState,
} from "react";
import Button from "../Button";
import FLexLayout from "../FlexLayout";
import SidePane from "./SidePane";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(
    0
  );
  const [
    showSideBar,
    setSideBarActive,
  ] = useState(false);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      updateWindowSize
    );
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener(
        "resize",
        updateWindowSize
      );
    };
  }, []);

  const handleClick = () => {
    setSideBarActive(!showSideBar);
  };

  return (
    <div>
      {showSideBar && (
        <SidePane
          onClickOutSide={handleClick}
          show={true}
          active={showSideBar}
        ></SidePane>
      )}

      <FLexLayout
        rowORColumn="row"
        justifyContent="between"
        style={{
          height: "60px",
          color: "wheat",
          padding: "10px",
        }}
      >
        <FLexLayout rowORColumn="row">
          <img
            src="/WISEIAS-LOGO.svg"
            alt="React Bootstrap Logo"
            style={{ marginLeft: "30px" }}
          />

          <FLexLayout
            rowORColumn="row"
            style={{
              border: "1px solid #EEEEEE",
              borderRadius: "5px",
              height: "40px",
              marginLeft: "30px",
              marginRight: "30px",
              width: "300px",
              paddingLeft:'10px'
            }}
          >
            <input
              placeholder="Search courses,topics & more"
              style={{
                border: "none",
                borderWidth: "0px",
                width: "250px",
              }}
            />
            <img src="/search.svg" />
          </FLexLayout>
        </FLexLayout>

        {windowWidth < 800 && (
          <div style={{ padding: "10px" }}>
            <img
              src="/menu.svg"
              alt="React Bootstrap Logo"
              onClick={handleClick}
            />
          </div>
        )}

        {windowWidth >= 800 && (
          <FLexLayout
            rowORColumn="row"
            style={{ marginRight: "60px" }}
          >
            <Button
              label="Login"
              style={{
                backgroundColor: "#01C5C4",
                height: "36px",
                width: "111px",
              }}
            />

            <Button
              label="Register Now"
              style={{
                border: "1px solid #30475E",
                height: "36px",
                width: "143px",
                marginLeft: "16px",
                color: "#30475E",
                backgroundColor: "#FFFFFF",
              }}
            />
          </FLexLayout>
        )}
      </FLexLayout>
    </div>
  );
};

export default Header;
