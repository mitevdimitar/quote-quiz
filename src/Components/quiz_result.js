import React, { useCallback, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "80vh"
    },
    correctAnswers: {
        color: "green"
    },
    wrongAnswers: {
        color: "red"
    },
    buttonContainer: {
        maxHeight: 50
    }
}));


function QuizRezult({
    quizQuestions,
    dispatch
}) {
    const classes = useStyles();
    const { answers, questions, allQuestionsAnswered } = quizQuestions;
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);

    const handleReset = () => {
        dispatch(QuizQuestions.setActiveStep(0));
    };

    const getResults = useCallback(() => {
        let correct = 0;
        let wrong = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === questions[i].correct_answer) {
                correct++;
            } else {
                wrong++;
            }
        }
        setCorrectAnswers(correct);
        setWrongAnswers(wrong);
    }, [answers, questions]);

    useEffect(() => {
        if (allQuestionsAnswered) {
            getResults();
        }
    }, [getResults, allQuestionsAnswered]);

    return (
        <Grid container justifyContent="center" className={classes.root}>    
            <Grid container item justifyContent="center" alignItems="center" direction="column">
                <Grid item>
                    <Typography className={classes.correctAnswers} sx={{ mt: 2, mb: 1 }}>
                        Correct answers: {correctAnswers}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.wrongAnswers} sx={{ mt: 2, mb: 1 }}>
                        Wrong answers: {wrongAnswers}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item justifyContent="center" className={classes.buttonContainer}>
              <Button onClick={handleReset}>Restart</Button>
            </Grid>
        </Grid>
    )
}

export default connect(mapStateToProps)(QuizRezult);