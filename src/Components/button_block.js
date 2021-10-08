import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';
import { isMobileDevice } from "../services/mobile";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    position: "absolute",
    bottom: isMobileDevice() ? 10 : 30,
    width: "100%"
  },
  backButton: {
    marginLeft: "50px !important"
  },
  nextButton: {
    marginRight: "50px !important"
  },
}));

function ButtonBlock({
    quizQuestions,
    dispatch
}) {
    const classes = useStyles();
    const { questions, activeStep, answers } = quizQuestions;
    const selected = answers[activeStep] ? answers[activeStep] : "";

    const isLastQuestion = () => {
        return activeStep === totalQuestions() - 1;
    };

    const totalQuestions = () => {
        return questions.length;
    };
    
    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        dispatch(QuizQuestions.setActiveStep(newActiveStep));
    };

    const handleBack = () => {
        const newActiveStep = activeStep > 0 ? activeStep - 1 : 0;
        dispatch(QuizQuestions.setActiveStep(newActiveStep));
    };

    const handleComplete = () => {
        dispatch(QuizQuestions.setAllQuestionsAnswered(true));
    }

    return (
        <Box className={classes.buttonContainer} sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                className={classes.backButton}
                size="medium"
                variant="contained"
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isLastQuestion() ?
                (
                  <Button 
                    disabled={!selected} 
                    onClick={handleComplete} 
                    className={classes.nextButton}
                    size="medium"
                    variant="contained"
                  >
                    Finish
                  </Button>
                )
                :
                (
                <Button 
                  disabled={!selected} 
                  onClick={handleNext} 
                  sx={{ mr: 1 }} 
                  className={classes.nextButton}
                  size="medium"
                  variant="contained"
                >
                  Next
                </Button>
                )
              }
            </Box>
    )
}

export default connect(mapStateToProps)(ButtonBlock);