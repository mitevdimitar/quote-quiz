import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: "end"
    },
}));

function MenuBar() {
    const classes = useStyles();

    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button href="/settings" color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
  );
}

export default MenuBar;