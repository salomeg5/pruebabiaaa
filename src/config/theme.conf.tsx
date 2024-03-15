import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import backgroundImage from "../assets/FondoCormaca.jpg"; // Asegúrate de que esta ruta sea correcta

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette {
    BG = "#FFFDFD",
    BLUE = "rgba(0, 0, 0, 0.87)",
    FONT_GLOBAL = "'Roboto'",
}

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: themePalette.BG, // Color de fondo por defecto
        },
        primary: {
            main: themePalette.BLUE,
        },
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: `
                    linear-gradient(to bottom right, rgba(0, 128, 0, 0.7), rgba(0, 102, 204, 0.7)),
                        url(${backgroundImage})
                    `,
                    backgroundSize: "100% 100%", // Estira la imagen para cubrir todo el espacio
                    backgroundPosition: "center center", // Centra la imagen
                    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
                    minHeight: "100vh", // Asegura que el body tenga al menos la altura de la ventana del navegador
                },
            },
        },
        
    },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Aplica los estilos base incluyendo el fondo personalizado */}
            {children}
        </ThemeProvider>
    );
};
