import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { PropsWithChildren } from "react";

export const MainThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
