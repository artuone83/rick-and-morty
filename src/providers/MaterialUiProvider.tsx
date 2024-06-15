import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { PropsWithRequiredChildren } from "../types/types";
import { theme } from "../theme/theme";
import { AppGlobalStyles } from "../globalStyles/AppGlobalStyles";

export const MaterialUiProvider = ({ children }: PropsWithRequiredChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppGlobalStyles />
      {children}
    </ThemeProvider>
  );
};
