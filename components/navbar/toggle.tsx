import React from "react";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { dark } from "@/app/store/slice/themeSlice";
import "./navigation.css";
function Toggle() {
  const dispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector((state: RootState) => state.theme.value);
  return (
    <Tooltip
      title={`Switch to ${darkMode ? "Light Mode" : "Dark Mode"}`}
      placement="bottom"
      arrow
    >
      <div
        className="toggle"
        onClick={() => {
          dispatch(dark());
        }}
      >
        <div className={darkMode ? "circledark" : "circlewhite"}></div>
      </div>
    </Tooltip>
  );
}

export default Toggle;
