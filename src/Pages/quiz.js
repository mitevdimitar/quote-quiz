import React, { useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Question from '../Components/question';
import { getQuestions } from "../services/questions";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%"
  },
  backButton: {
    marginLeft: "50px !important"
  },
  nextButton: {
    marginRight: "50px !important"
  },
}));

function Quiz({
  quizQuestions,
  dispatch,
  settings
}) {
  const classes = useStyles();
  const { questions, activeStep } = quizQuestions;

  const getQuizQuestions = useCallback(async ()=>{
    const response = await getQuestions(settings.quizMode);
    if (response && response.status === 200) {
      dispatch(QuizQuestions.setQuizQuestions(response.data));
    }
  }, [dispatch, settings.quizMode]);

  useEffect(()=>{
      getQuizQuestions();
      // eslint-disable-next-line
  }, [settings.quizMode])

  const totalQuestions = () => {
    return questions.length;
  };

  const isLastQuestion = () => {
    return activeStep === totalQuestions() - 1;
  };

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    dispatch(QuizQuestions.setActiveStep(newActiveStep));
  };

  const handleBack = () => {
    const newActiveStep = activeStep > 0 ? activeStep - 1 : 0;
    dispatch(QuizQuestions.setActiveStep(newActiveStep));
  };

  const handleReset = () => {
    dispatch(QuizQuestions.setActiveStep(0));
  };

  const allQuestionsAnswered = () => {
    //check if allQuestionsAnswered is true
  }

  const handleComplete = () => {
    //set allQuestionsAnswered to true
  }

  return (
    <Box sx={{ width: '100%' }}>
      <div>
        {allQuestionsAnswered() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All questions answered - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Question />
            <Box className={classes.buttonContainer} sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                className={classes.backButton}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isLastQuestion() ?
                (
                  <Button onClick={handleComplete} className={classes.nextButton}>
                    Finish
                  </Button>
                )
                :
                (
                <Button onClick={handleNext} sx={{ mr: 1 }} className={classes.nextButton}>
                  Next
                </Button>
                )
              }
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

export default connect(mapStateToProps)(Quiz);