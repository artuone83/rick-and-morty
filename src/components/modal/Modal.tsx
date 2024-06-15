import { Modal, IconButton, Paper } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: { xs: "90%", md: "60%" },
  minHeight: 400,
};

const CharacterModal = ({
  open,
  onClose,
  children,
}: ModalProps): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={boxStyle}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Paper>
    </Modal>
  );
};

export default CharacterModal;
