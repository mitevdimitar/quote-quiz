import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Question from '../Components/question';
import { getQuestions } from "../services/questions";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';

function Quiz({
  quizQuestions,
  dispatch
}) {
  const { questions } = quizQuestions;
  const [activeStep, setActiveStep] = useState(0);
  //const [questions, setQuestions] = useState([]);
  console.log(quizQuestions)

  const getQuizQuestions = useCallback(async ()=>{
    const response = await getQuestions();
    console.log(response.data)
    if (response.status === 200) {
      dispatch(QuizQuestions.setQuizQuestions(response.data));
      //setQuestions(questions)
    }
  }, []);

  useEffect(()=>{
      getQuizQuestions();
      // eslint-disable-next-line
  }, [])

  const totalQuestions = () => {
    return questions.length;
  };

  const isLastQuestion = () => {
    return activeStep === totalQuestions() - 1;
  };

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
            <Question 
              activeStep={activeStep}
              question={questions[activeStep]}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isLastQuestion() ?
                (
                  <Button onClick={handleComplete}>
                    Finish
                  </Button>
                )
                :
                (
                <Button onClick={handleNext} sx={{ mr: 1 }}>
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