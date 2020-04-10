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

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

const profitCenterRef = React.createRef();

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
    border: "1px solid",
  },
  logoClass: {
    width: "5%",
    height: "3em",
    [theme.breakpoints.down("md")]: {
      width: "6%",
      height: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "7%",
      height: "2em",
    },
  },
  menu: {
    background: theme.palette.common.reactMaterialBlue,
    color: theme.palette.common.reactMaterialWhite,
  },
  menuItemStyle: {
    opacity: "0.7",
    "&:hover": {
      background: theme.palette.common.reactMaterialOrange,
      opacity: "1",
    },
  },
  iconDrawerBtn: {
    marginLeft: "auto",
    "&:hover": {
      background: "transparent",
    },
  },
  menuIconDrawer: {
    height: "25px",
    width: "25px",
  },
  swipeableStyle: {
    fontFamily: 'Segoe UI',
    background: theme.palette.common.reactMaterialBlue,
    color: theme.palette.common.reactMaterialWhite,
  },
  swipeableListStyle: {
    "&:hover": {
      background: theme.palette.common.reactMaterialOrange,
      fontWeight: 'bold'
    },
  },
  appBarClass:{
    zIndex: theme.zIndex.modal + 1
  }
}));

/*
  <Typography variant="h3">
                Arc Zone
            </Typography>

  <Button variant="contained" color="secondary" className={useStyleHook.button}>Free Estimate</Button>

*/

export default function Header() {
  const useStyleHook = useStyles();
  const theme = useTheme();
  const mdQuery = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setvalue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

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
    1: ["/profitcenter","/chennai", "/mumbai", "/sj"],
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
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const routes = [
    { label: "Drivers", to: "/", activeIndex: 0 },
    {
      label: "Profit Centers",
      to: "/profitcenter",
      activeIndex: 1,
      ariaOwns: anchorEl ? profitCenterRef : undefined,
      ariaHaspopup: anchorEl ? true : undefined,
      onClick: (e) => handleClick(e),
      onHover: (e) => handleClick(e),
    },
    { label: "Tractors", to: "/tractors", activeIndex: 2 },
    { label: "Reports", to: "/reports", activeIndex: 3 },
    { label: "Document Center", to: "/documentcenter", activeIndex: 4 },
    { label: "Messages", to: "/messages", activeIndex: 5 },
  ];

  const tabs = (
    <>
      <Tabs
        value={value}
        className={useStyleHook.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((val, idx) => (
          <Tab
            className={useStyleHook.tab}
            label={val.label}
            component={Link}
            to={val.to}
            aria-owns={val.ariaOwns}
            aria-haspopup={val.ariaHaspopup}
            onClick={val.onClick}
            onMouseOver={val.onHover}
          ></Tab>
        ))}
      </Tabs>
      <AccountCircle />
      <Notifications />
      <Menu
        id={profitCenterRef}
        elevation={0}
        classes={{ paper: useStyleHook.menu }}
        anchorEl={anchorEl}
        open={openMenu}
        style={{zIndex: theme.zIndex.modal + 2}}
        onClose={() => {
          handleClose();
          setvalue(1);
        }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem
          key={`Math.random()+0`}
          className={useStyleHook.menuItemStyle}
          component={Link}
          to="/profitcenter"
          onClose={() => {
            handleClose();
            setvalue(1);
          }}
          onClick={() => {
            handleClose();
            setvalue(1);
          }}
        >
          Profit Centers
        </MenuItem>
        <MenuItem
          key={`Math.random()+1`}
          className={useStyleHook.menuItemStyle}
          component={Link}
          to="/chennai"
          onClose={() => {
            handleClose();
            setvalue(1);
          }}
          onClick={() => {
            handleClose();
            setvalue(1);
          }}
        >
          Chennai
        </MenuItem>
        <MenuItem
          key={`Math.random()+2`}
          className={useStyleHook.menuItemStyle}
          component={Link}
          to="/mumbai"
          onClose={() => {
            handleClose();
            setvalue(1);
          }}
          onClick={() => {
            handleClose();
            setvalue(1);
          }}
        >
          Mumbai
        </MenuItem>
        <MenuItem
          key={`Math.random()+3`}
          className={useStyleHook.menuItemStyle}
          component={Link}
          to="/sj"
          onClose={() => {
            handleClose();
            setvalue(1);
          }}
          onClick={() => {
            handleClose();
            setvalue(1);
          }}
        >
          San Jose
        </MenuItem>
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: useStyleHook.swipeableStyle }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        close={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <div className={useStyleHook.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, idx) => (
            <ListItem
              divider
              button
              key={idx}
              component={Link}
              to={route.to}
              selected={value === route.activeIndex}
              classes={{selected: useStyleHook.swipeableListStyle}}
              className={useStyleHook.swipeableListStyle}
              onClick={() => {
                setOpenDrawer(false);
                setvalue(route.activeIndex);
              }}
            >
              <ListItemText key={`listItem`+idx} disableTypography>{route.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={useStyleHook.iconDrawerBtn}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={useStyleHook.menuIconDrawer} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={useStyleHook.appBarClass}>
          <ToolBar className={useStyleHook.toolbar}>
            <img src={logo} alt="ARK logo" className={useStyleHook.logoClass} />
            {mdQuery ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={useStyleHook.toolbarMargin} />
    </>
  );
}
