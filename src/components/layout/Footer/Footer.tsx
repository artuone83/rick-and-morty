import { Box } from "@mui/material";

export const Footer = (): JSX.Element => {
  return (
    <Box component="footer" py={2}>
      &copy; {new Date().getFullYear()} Rick And Morty Api. All Rights Reserved.
    </Box>
  );
};
