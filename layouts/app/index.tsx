import { AppHeader } from "components/header";
import { FunctionComponent } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Any Global functionality, or behavior across the app can be handled here

export const App: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0000FF",
      },
      secondary: {
        main: "#189AB4",
      },
      success: {
        main: "#66bb6a",
        contrastText: "rgba(255,255,255,0)",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <>{children}</>
      </ThemeProvider>
    </>
  );
};
