import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Settings from "../Pages/settings";
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizSettings } from "../store/actions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: "end"
    },
}));

function MenuBar({
  settings,
  dispatch
}) {
    const classes = useStyles();
    const { modalOpen } = settings;
    const handleOpen = () => dispatch(QuizSettings.setModalOpen(true));
    const handleClose = () => dispatch(QuizSettings.setModalOpen(false));

    return (
      <AppBar position="static">
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Settings />
          </Box>
        </Modal>
        <Toolbar className={classes.toolbar}>
            <Button onClick={handleOpen} color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
  );
}

export default connect(mapStateToProps)(MenuBar);