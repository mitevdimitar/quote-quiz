import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';
import Notification from "./notification";

const useStyles = makeStyles((theme) => ({
    messageContainer: {
        marginTop: 50,
        marginLeft: 20
    },
    answerOption: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        textAlign: "center",
        border: "1px solid #1A76D2",
        borderRadius: 10,
        minHeight: 65,
        marginTop: "50px !important",
        "&:hover": {
            border: "2px solid #1A76D2"
        },
    }
}));

function Question({
    settings,
    quizQuestions,
    dispatch,
    message
}) {
    const classes = useStyles();
    const { questions, activeStep, answers } = quizQuestions;
    const selected = answers[activeStep] ? answers[activeStep] : "";
    const question = questions[activeStep];
    const options = settings.quizMode === "binary" ? ["Yes", "No"] : question.options;

    const isAnswerSelected = (answer) => {
        return answer === selected;
    }

    const selectAnswer = (answer) => {
        if (!selected) {
            dispatch(QuizQuestions.addAnswer(answer));
            const correctAnswer = questions && questions[activeStep] && questions[activeStep].correct_answer;
            let notification = {};
            if (answer === correctAnswer) {
                notification.message = `Correct! The right answer is ${correctAnswer}.`
                notification.severity = "success"
            } else {
                notification.message = `Sorry, you are wrong! The right answer is ${correctAnswer}`
                notification.severity = "error"
            }
            dispatch(QuizQuestions.addNotification(notification));
        }
    }

    return (
        <Grid container justifyContent="center">
            {selected && (
                <Notification 
                    open={true} 
                />
            )}
            {question ? (
                <>
                    <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>{question.value}</Typography>
                    <Grid container item justifyContent="center">            
                        {options && options.map((answer, i)=>{
                            return (
                                <Grid 
                                    key={i} 
                                    item 
                                    className={classes.answerOption} 
                                    style={{
                                        cursor: !selected && "pointer", 
                                        background: isAnswerSelected(answer) ? "#1A76D2" : "unset",
                                        color: isAnswerSelected(answer) ? "white" : "black",
                                    }}
                                    onClick={()=>selectAnswer(answer)}
                                >
                                    {answer}
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            ) : (
                <Grid container className={classes.messageContainer}>
                    {message}
                </Grid>
            )}
        </Grid>
    )
}

export default connect(mapStateToProps)(Question);