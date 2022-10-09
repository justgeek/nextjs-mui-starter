import { AppHeader } from "components/header";
import { FunctionComponent } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";

// Any Global functionality, or behavior across the app can be handled here

const App: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

export default App;
