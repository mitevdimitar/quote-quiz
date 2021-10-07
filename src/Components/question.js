import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { connect } from "react-redux";
import { mapStateToProps } from '../services/redux';

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
    activeStep,
    settings,
    quizQuestions
}) {
    const { questions } = quizQuestions;
    const question = questions[activeStep];
    const answers = settings.quizMode === "binary" ? ["Yes", "No"] : question.options;
    const [selected, setSelected] = useState("");
    const classes = useStyles();

    const isAnswerSelected = (answer) => {
        return answer === selected;
    }
    
    return (
        <Grid container justifyContent="center" className={classes.root}>
            {question && (
                <>
                    <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>{question.value}</Typography>
                    <Grid container item justifyContent="center">            
                        {answers.map((answer, i)=>{
                            return (
                                <Grid 
                                    key={i} 
                                    item 
                                    className={classes.answerOption} 
                                    style={{
                                        cursor: "pointer", 
                                        background: isAnswerSelected(answer) ? "#1A76D2" : "unset",
                                        color: isAnswerSelected(answer) ? "white" : "black",
                                    }}
                                    onClick={()=>setSelected(answer)}
                                >
                                    {answer}
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            )}
        </Grid>
    )
}

export default connect(mapStateToProps)(Question);