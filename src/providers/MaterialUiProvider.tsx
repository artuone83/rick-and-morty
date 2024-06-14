import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { PropsWithRequiredChildren } from "../types/PropsWithRequiredChildren";
import { theme } from "../theme/theme";
import { AppGlobalStyles } from "../globalStyles/AppGlobalStyles";

export const MaterialUiProvider = ({ children }: PropsWithRequiredChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppGlobalStyles />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
        }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
};
