import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles";
import { Tabs, Tab, Button } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle, Notifications } from "@material-ui/icons";
import logo from "../../assets/ArcZoneLogo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    margin: "0 auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px",
  },
  button: {
    fontFamily: "pacifico",
    borderRadius: "50px",
    fontSize: "1rem",
    marginLeft: "50px",
    marginRight: "25px",
    textTransform: "none",
    color: "#FFFFFF",
    height: "45px",
  },
  toolbar: {
    boxShadow: "0.8px 0.8px 0.8px 0.8px #ccc",
  },
  logoClass: {
    width: "5%",
  },
  menu: {
    background: theme.palette.common.reactMaterialBlue,
    color: theme.palette.common.reactMaterialWhite,
  },
  menuItemStyle: {
    '&:hover':{
      background: theme.palette.common.reactMaterialOrange,
    }
  },
}));

/*
  <Typography variant="h3">
                Arc Zone
            </Typography>

  <Button variant="contained" color="secondary" className={useStyleHook.button}>Free Estimate</Button>

*/

export default function Header() {
  const useStyleHook = useStyles();
  const [value, setvalue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const pathArr = [
    "/",
    "/profitcenter",
    "/tractors",
    "/reports",
    "/documentcenter",
    "/messages",
  ];

  const subMenus = {
    0: [],
    1: ["/chennai", "/mumbai", "/sj"],
    2: [],
    3: [],
    4: [],
    5: [],
  };

  useEffect(() => {
    for (let i in pathArr) {
      if (window.location.pathname === pathArr[i]) {
        return setvalue(parseInt(i));
      } else {
        if (subMenus[i].length > 0) {
          let getId = subMenus[i].find((path) => {
            if (window.location.pathname === path) return setvalue(parseInt(i));
          });
        }
      }
    }
  });

  const handleChange = (e, val) => {
    setvalue(val);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar className={useStyleHook.toolbar}>
            <img src={logo} alt="ARC logo" className={useStyleHook.logoClass} />
            <Tabs
              value={value}
              className={useStyleHook.tabContainer}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab
                className={useStyleHook.tab}
                label="Drivers"
                component={Link}
                to="/"
              />
              <Tab
                aria-owns={anchorEl ? "profitcentermenu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onClick={(e) => handleClick(e)}
                className={useStyleHook.tab}
                label="Profit Centers"
                component={Link}
                to="/profitcenter"
              />
              <Tab
                className={useStyleHook.tab}
                label="Tractors"
                component={Link}
                to="/tractors"
              />
              <Tab
                className={useStyleHook.tab}
                label="Reports"
                component={Link}
                to="/reports"
              />
              <Tab
                className={useStyleHook.tab}
                label="Document Center"
                component={Link}
                to="/documentcenter"
              />
              <Tab
                className={useStyleHook.tab}
                label="Messages"
                component={Link}
                to="/messages"
              />
            </Tabs>
            <AccountCircle />
            <Notifications />
            <Menu
              id="profitcentermenu"
              elevation={0}
              classes={{ paper: useStyleHook.menu }}
              anchorEl={anchorEl}
              open={open}
              onClose={() => {
                handleClose();
                setvalue(1);
              }}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                className={useStyleHook.menuItemStyle}
                component={Link}
                to="/profitcenter"
                onClose={() => {
                  handleClose();
                  setvalue(1);
                }}
              >
                Profit Centers
              </MenuItem>
              <MenuItem
                className={useStyleHook.menuItemStyle}
                component={Link}
                to="/chennai"
                onClose={() => {
                  handleClose();
                  setvalue(1);
                }}
              >
                Chennai
              </MenuItem>
              <MenuItem
                className={useStyleHook.menuItemStyle}
                component={Link}
                to="/mumbai"
                onClose={() => {
                  handleClose();
                  setvalue(1);
                }}
              >
                Mumbai
              </MenuItem>
              <MenuItem
                className={useStyleHook.menuItemStyle}
                component={Link}
                to="/sj"
                onClose={() => {
                  handleClose();
                  setvalue(1);
                }}
              >
                San Jose
              </MenuItem>
            </Menu>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={useStyleHook.toolbarMargin} />
    </>
  );
}
