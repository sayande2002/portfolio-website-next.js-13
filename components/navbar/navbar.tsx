"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";

import navLinks from "./navLinks";
import Sig from "./signature";
import Toggle from "./toggle";

import { resize } from "@/app/store/slice/windowlice";
import { RootState, AppDispatch } from "@/app/store/store";
import "./navigation.css";
import GlobalStyles from "@/app/globals.styles";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch<AppDispatch>();
  dispatch(resize(width));

  const darkMode = useSelector((state: RootState) => state.theme.value);
  const windowSize = useSelector((state: RootState) => state.window.breakpoint);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
        <Grid container>
          <Grid item lg={5} md={9} sm={5} xs={8.2} className="logo-gird">
            <Tooltip title="Go Home" followCursor arrow>
              <Link className="logo" href="/" onClick={() => setClick(!click)}>
                <Sig />
              </Link>
            </Tooltip>
          </Grid>
          <Grid
            item
            lg={7}
            md={3}
            sm={7}
            xs={3.8}
            className="nav-links-container"
          >
            {windowSize < 1200 ? (
              <div className="toggle-drawer">
                <Toggle />
                <div className="menu" onClick={() => setClick(!click)}>
                  {click ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
                </div>
                {/* <Sidebar click={click} setClick={setClick} /> */}
              </div>
            ) : (
              <>
                {navLinks.map(({ to, name, icon }, index) => (
                  <Tooltip key={index} title={name} placement="bottom" arrow>
                    <Link className="nav-link" href={to}>
                      {/* {icon} */}
                      &nbsp;
                      {name}
                    </Link>
                  </Tooltip>
                ))}
                <Toggle />
              </>
            )}
          </Grid>
        </Grid>
      </nav>
      <hr className="horizontal-line" />
    </>
  );
};

export default Navbar;
