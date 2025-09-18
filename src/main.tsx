import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "24px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "700",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "700",
    },
    h6: {
      fontSize: "14px",
      fontWeight: "700",
    },
    body1: {
      fontSize: "14px",
      fontWeight: "400",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
