import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#664DE5",
        },
        secondary: {
            main: "#19857b",
        },
        text: {
            light: "#7c7c7c",
            primary: "#151B28",
        },
        error: {
            main: red.A400,
        },
        border: {
            light: "#EEF2F6",
        },
    },
    typography: {
        fontFamily: `'Inter', sans-serif`,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                fullWidth: true,
                sx: {
                    py: 1.5,
                    textTransform: "capitalize",
                    borderRadius: 1.5,
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                sx: {
                    borderColor: "#EEF2F6",
                },
                InputProps: {
                    sx: {
                        p: 0,
                        borderRadius: 1.5,
                    },
                },
            },
        },
    },
});

export default theme;
