import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "../icons/HomeIcon.PNG";
import SearchIcon from "../icons/SearchIcon.PNG";
import SettingsIcon from "../icons/SettingsIcon.PNG";

const useStyles = makeStyles({
  root: {
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    background: "lightgray",
    height: "100px",
  },
  navBarButtons: {
    "&:hover": {
      background: "lightblue",
    },
    border: "5px solid darkgray",
    borderRadius: "10px",
    background: "white",
  },
  square: {
    width: 30,
    height: 30,
  },
});

export default function BottomNav({ handleNavBarClick }) {
    const classes = useStyles();
    const [value, setValue] = React.useState("home");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      handleNavBarClick(newValue);
    };
  
    return (
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.navBarButtons}
          label="Game Rules"
          value="home"
          icon={<img width="50px" src={HomeIcon} />}
        />
        <BottomNavigationAction
          className={classes.navBarButtons}
          label="Choice Tracking"
          value="search"
          icon={<img width="50px" src={SearchIcon} />}
        />
        <BottomNavigationAction
          className={classes.navBarButtons}
          label="Rewards and Penalties Graphs"
          value="settings"
          icon={<img width="50px" src={SettingsIcon} />}
        />
      </BottomNavigation>
    );
  }