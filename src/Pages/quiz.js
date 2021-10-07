import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Question from '../Components/question';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

function Quiz() {
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
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

  const allStepsCompleted = () => {
    //check if allStepsCompleted is true
  }

  const handleComplete = () => {
    //set allStepsCompleted to true
  }

  return (
    <Box sx={{ width: '100%' }}>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
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
              step={steps[activeStep]}
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
              {isLastStep() ?
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

export default Quiz;