import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import VillaRoundedIcon from "@mui/icons-material/VillaRounded";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="list">
        <li className="logo">
          <VillaRoundedIcon className="VillaRoundedIcon" />
          <span>Real-Broks</span>
        </li>
        <li>Rent</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>Manage Property</li>
        <li>Resourse</li>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">Login</Button>
          <Button variant="contained">Sign up</Button>
        </Stack>
      </div>
    </div>
  );
}
