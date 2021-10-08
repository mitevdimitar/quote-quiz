import React, { useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Question from '../Components/question';
import { getQuestions } from "../services/questions";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';
import ButtonBlock from '../Components/button_block';

function Quiz({
  dispatch,
  settings,
  quizQuestions
}) {
  const { allQuestionsAnswered } = quizQuestions;
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

  const handleReset = () => {
    dispatch(QuizQuestions.setActiveStep(0));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div>
        {allQuestionsAnswered ? (
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
            <ButtonBlock />
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

export default connect(mapStateToProps)(Quiz);