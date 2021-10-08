import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { isMobileDevice } from '../services/mobile';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Notification({
    open,
    quizQuestions
}) {
    const { notifications, activeStep } = quizQuestions;
    const message = notifications[activeStep] ? notifications[activeStep].message : "";
    const severity = notifications[activeStep] && notifications[activeStep].severity;

    return (
        <Snackbar style={{bottom: isMobileDevice() ? 60 : 8}} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={2000}>
            <Alert severity={severity}>
              {message}
            </Alert>
        </Snackbar>
    )
}

export default connect(mapStateToProps)(Notification);