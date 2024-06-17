import Container from "@mui/material/Container";

import { PropsWithRequiredChildren } from "types/types";
import { Header } from "components/layout/header/Header";
import { Main } from "components/layout/main/Main";
import { Footer } from "components/layout/footer/Footer";

export const PageLayout = ({
  children,
}: PropsWithRequiredChildren): JSX.Element => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "100%",
        backgroundColor: "background.default",
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
