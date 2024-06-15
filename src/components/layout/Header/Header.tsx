import { Box } from "@mui/material";
import { ReactComponent as Logo } from "../../../assets/icons/ramlogo.svg";

export const Header = (): JSX.Element => {
  return (
    <Box component="header" py={2} mb={1}>
      <Logo />
    </Box>
  );
};
