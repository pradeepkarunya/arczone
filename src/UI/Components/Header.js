import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Button } from '@material-ui/core';

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles( theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    tabContainer:{
        marginLeft: 'auto'
    },
    tab:{
        ...theme.typography.tab,
        minWidth: '10px'
    },
    button:{
        fontFamily: 'pacifico',
        borderRadius: '50px',
        fontSize: '1rem',
        marginLeft: '50px',
        marginRight: '25px',
        textTransform: 'none',
        color: '#FFFFFF',
        height: '45px'
    },
    toolbar: {
        boxShadow:'0.8px 0.8px 0.8px 0.8px #ccc'
    }
}))

export default function Header() {
  const useStyleHook = useStyles();
  return (
    <>
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <ToolBar className={useStyleHook.toolbar}>
            <Typography variant="h3">
                Arc Zone
            </Typography>
            <Tabs className={useStyleHook.tabContainer}>
                <Tab className={useStyleHook.tab} label="Drivers" />
                <Tab className={useStyleHook.tab} label="Profit Centers" />
                <Tab className={useStyleHook.tab} label="Tractors" />
                <Tab className={useStyleHook.tab} label="Reports" />
                <Tab className={useStyleHook.tab} label="Document Center" />
                <Tab className={useStyleHook.tab} label="Messages" />
            </Tabs>
            <Button variant="contained" color="secondary" className={useStyleHook.button}>Free Estimate</Button>
        </ToolBar>
      </AppBar>
    </ElevationScroll>
    <div className={useStyleHook.toolbarMargin} />
    </>
  );
}
