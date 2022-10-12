import React, { useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";

import LogoImage from "assets/Logo/Logo.png";
import keywords from "constants/keywors";
import { titleMapping } from "./mappings";

import Page from "components/Page";
import CustomStepper from "components/Stepper";
import Steps from "./components/Steps";

import * as Styled from "./styled";

const steps = ["1", "2", "3", "4"];

function Onboarding() {
    const [step, setStep] = useState(1);

    const { control, handleSubmit } = useForm({ mode: "all" });

    const handleStepChange = () => {
        setStep((prev) => (step === 4 ? 1 : prev + 1));
    };

    return (
        <Page>
            <Container maxWidth="lg" sx={{ pt: 5, mb: [5, 0], pb: [5, 0] }}>
                <Styled.MainStack alignItems="center">
                    <Styled.ContentStack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                    >
                        <Styled.LogoImg src={LogoImage} alt="CustShort Test" />

                        <Stack
                            alignItems="center"
                            maxWidth="65%"
                            width="100%"
                            sx={{ pt: 3, pb: 7 }}
                        >
                            <CustomStepper steps={steps} activeStep={step} />
                        </Stack>

                        {step == 4 && (
                            <Styled.SuccessCheckButton size="large" mb={1}>
                                <AiFillCheckCircle />
                            </Styled.SuccessCheckButton>
                        )}

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "700",
                                textAlign: "center",
                                color: "text.primary",
                            }}
                        >
                            {titleMapping[step - 1].title}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.light",
                                    mt: 1.3,
                                    fontWeight: "500",
                                }}
                            >
                                {titleMapping[step - 1].sub}
                            </Typography>
                        </Typography>

                        <Stack width="400px" spacing={4} sx={{ pt: 6 }}>
                            <Steps currentStep={step} control={control} />

                            <Styled.SubmitButton
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit(handleStepChange)}
                            >
                                {
                                    keywords.Onboarding[
                                        step === 4
                                            ? "LaunchEden"
                                            : "CreateWorkspace"
                                    ]
                                }
                            </Styled.SubmitButton>
                        </Stack>
                    </Styled.ContentStack>
                </Styled.MainStack>
            </Container>
        </Page>
    );
}

export default Onboarding;
