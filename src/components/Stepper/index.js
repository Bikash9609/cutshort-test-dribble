import React from "react";
import {
    Step,
    StepLabel,
    Stepper,
    StepConnector,
    stepConnectorClasses,
    styled,
} from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 20,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            height: "2px",
            backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.main} 50%, #EEF2F6 50%)`,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: `${theme.palette.primary.main}`,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor: "#EEF2F6",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor: "#fff",
    zIndex: 1,
    color: "#6B768B",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: `2px solid #EEF2F6`,
    ...(ownerState.active &&
        {
            // backgroundColor: `${theme.palette.primary.main}`,
        }),
    ...(ownerState.completed && {
        backgroundColor: `${theme.palette.primary.main}`,
        color: "#fff",
        borderColor: theme.palette.primary.main,
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

function CustomStepper({ steps, activeStep }) {
    return (
        <Stepper
            sx={{ width: "100%" }}
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
        >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon} />
                </Step>
            ))}
        </Stepper>
    );
}

export default CustomStepper;
