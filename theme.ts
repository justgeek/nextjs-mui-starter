import { createTheme } from "@mui/material/styles";
import colors from "./sass/colors.module.scss";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary,
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
