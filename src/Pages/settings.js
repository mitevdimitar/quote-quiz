import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizSettings } from "../store/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30
    },
    label: {
        marginBottom: 20,
        fontSize: "1.7rem !important"
    },
    buttonContainer: {
        marginTop: "50px !important",
        paddingRight: 20
    }
}));

function Settings({
    settings,
    dispatch
}) {
    const classes = useStyles();
    const [mode, setMode] = useState(settings.quizMode)

    const onModeChange = (event) => {
        setMode(event.target.value);
    }

    const onModeSave = () => {
        dispatch(QuizSettings.setQuizSettings(mode));
        dispatch(QuizSettings.setModalOpen(false))
    }

    return (
        <Grid container justifyContent="center" className={classes.root}>
            <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.label}>Quiz mode</FormLabel>
                <RadioGroup
                    aria-label="quiz-mode"
                    value={mode}
                    name="radio-buttons-group"
                    onChange={onModeChange}
                >
                    <FormControlLabel value="binary" control={<Radio />} label="Binary (Yes/No)" />
                    <FormControlLabel value="multiple" control={<Radio />} label="Multiple choice" />

                </RadioGroup>
            </FormControl>
            <Grid container item justifyContent="center" className={classes.buttonContainer}>
                <Button disabled={settings.quizMode === mode} variant="contained" onClick={onModeSave}>Save</Button>
            </Grid>
        </Grid>
    )
}

export default connect(mapStateToProps)(Settings);