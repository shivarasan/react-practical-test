import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const Header = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs aria-label='simple tabs example'>
          <Tab label='Flight Search' onClick={() => history.push("/")} />
          <Tab label='Flight Create' onClick={() => history.push("/create")} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Header;
