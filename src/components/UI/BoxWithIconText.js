import React from "react";
import { IconButton, Stack, styled, Typography } from "@mui/material";

export const PlanningItemStack = styled(Stack)`
    border: 1px solid ${({ theme }) => theme.palette.border.light};
    padding: 1rem 1.5rem;
    border-radius: 0.3rem;
    svg {
        fill: #354259;
    }

    &.active {
        border-color: ${({ theme }) => theme.palette.primary.main};
        svg {
            fill: ${({ theme }) => theme.palette.primary.main};
        }
    }
`;

export const BoxHeaderTypography = styled(Typography)`
    font-weight: bold;
`;

export const BoxSummaryTypography = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.light};
`;

function BoxWithIconText({ summary, title, icon, isActive, handleClick }) {
    return (
        <PlanningItemStack
            direction="column"
            alignItems="flex-start"
            className={isActive ? "active" : ""}
            onClick={handleClick}
            sx={{ cursor: "pointer", height: "180px" }}
        >
            <IconButton
                disableFocusRipple
                disableRipple
                sx={{ pl: 0, ml: 0, mb: "0.5rem" }}
            >
                {icon}
            </IconButton>
            <BoxHeaderTypography variant="body1" gutterBottom>
                {title}
            </BoxHeaderTypography>
            <BoxSummaryTypography variant="body2">
                {summary}
            </BoxSummaryTypography>
        </PlanningItemStack>
    );
}

export default BoxWithIconText;
