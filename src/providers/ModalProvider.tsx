import { createContext, useContext, useMemo, useState } from "react";
import { PropsWithRequiredChildren } from "../types/types";

interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  setIsModalOpen: (): void => {},
  modalContent: null,
  setModalContent: (): void => {},
});

export const ModalProvider = ({ children }: PropsWithRequiredChildren) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const value = useMemo(
    () => ({ isModalOpen, setIsModalOpen, modalContent, setModalContent }),
    [isModalOpen, modalContent]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};
