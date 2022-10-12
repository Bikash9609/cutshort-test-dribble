import React from "react";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    TextField,
    styled,
    Typography,
} from "@mui/material";

const StyledFormControl = styled(FormControl)`
    padding-top: 1.5rem;

    & .MuiInputLabel-root {
        font-weight: bold;
        font-size: 1.2rem;
        color: #6e7687;
    }
`;

function CusInput({
    label,
    value,
    placeholder,
    onChange,
    name,
    helperText,
    isError,
    optional,
    TextFieldProps,
    ...rest
}) {
    return (
        <StyledFormControl error={isError} variant="standard">
            <InputLabel
                shrink
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                {label}{" "}
                {optional && (
                    <Typography
                        color="#C8D1DF"
                        fontWeight="600"
                        ml={1}
                        fontSize="1.1rem"
                    >
                        (optional)
                    </Typography>
                )}
            </InputLabel>
            <TextField
                error={isError}
                name={name}
                value={value}
                onChange={onChange}
                variant="outlined"
                placeholder={placeholder}
                {...TextFieldProps}
                {...rest}
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </StyledFormControl>
    );
}

export default CusInput;
