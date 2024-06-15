import Container from "@mui/material/Container";

import { PropsWithRequiredChildren } from "../../../types/types";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";
import Modal from "../../modal/Modal";
import { useModalContext } from "../../../providers/ModalProvider";
import { deleteUrlSearchQuery } from "../../../utils/deleteUrlSearchQuery";

export const PageLayout = ({
  children,
}: PropsWithRequiredChildren): JSX.Element => {
  const { isModalOpen, setIsModalOpen, modalContent } = useModalContext();
  const handleCloseModal = () => {
    setIsModalOpen(false);
    deleteUrlSearchQuery();
  };

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
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </Container>
  );
};
