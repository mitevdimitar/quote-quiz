import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Question from '../Components/question';
import { getQuestions } from "../services/questions";
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';
import ButtonBlock from '../Components/button_block';
import QuizRezult from '../Components/quiz_result';

function Quiz({
  dispatch,
  settings,
  quizQuestions
}) {
  const { allQuestionsAnswered } = quizQuestions;
  const [message, setMessage] = useState("");
  const getQuizQuestions = useCallback(async ()=>{
    const response = await getQuestions(settings.quizMode);
    if (response && response.status === 200) {
      dispatch(QuizQuestions.setQuizQuestions(response.data));
    } else {
      setMessage("Oops, it seems that you forgot to start the JSON server. Please run the command: npx json-server --watch src/db.json --port 3001 and reload the page!");
    }
  }, [dispatch, settings.quizMode]);

  useEffect(()=>{
      getQuizQuestions();
      // eslint-disable-next-line
  }, [settings.quizMode])

  return (
    <Box sx={{ width: '100%' }}>
      <div>
        {allQuestionsAnswered ? (
          <QuizRezult />
        ) : (
          <React.Fragment>
            <Question message={message}/>
            <ButtonBlock />
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

export default connect(mapStateToProps)(Quiz);