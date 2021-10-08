import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';
import { QuizQuestions } from '../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        //minHeight: "80vh"
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
    dispatch
}) {
    const classes = useStyles();
    const { questions, activeStep, answers } = quizQuestions;
    const selected = answers[activeStep] ? answers[activeStep] : "";
    console.log(answers)
    const question = questions[activeStep];
    const options = settings.quizMode === "binary" ? ["Yes", "No"] : question.options;

    const isAnswerSelected = (answer) => {
        return answer === selected;
    }

    const selectAnswer = (answer) => {
        if (!selected) {
            dispatch(QuizQuestions.addAnswer(answer));
        }
    }

    const showErrorMessage = () => {
            return (
                <Typography>
                    {"Oops, it seems that you forgot to start the JSON server. Please run the command: npx json-server --watch src/db.json --port 3001 and reload the page!"}
                </Typography>
            )
    }

    return (
        <Grid container justifyContent="center" className={classes.root}>
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
                <>
                    {showErrorMessage()}
                </>
            )}
        </Grid>
    )
}

export default connect(mapStateToProps)(Question);