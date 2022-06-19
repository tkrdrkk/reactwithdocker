import { indigo, red } from "@mui/material/colors";
import { createTheme, TypeText } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useTimezone } from "hooks/useTimezone";
import { PropsWithChildren } from "react";

export const MainThemeProvider = ({ children }: PropsWithChildren) => {
  const { getCurrentItem } = useTimezone();
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      // text: {
      //   primary: getCurrentItem<string>([
      //     indigo[500],
      //     indigo[500],
      //     indigo[500],
      //     indigo[500],
      //     indigo[100],
      //     indigo[100],
      //   ]),
      // },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
