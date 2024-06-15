import { createContext, useContext, useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const ModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};
