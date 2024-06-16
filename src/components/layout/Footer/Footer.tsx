import { Box, Typography } from "@mui/material";

export const Footer = (): JSX.Element => {
  return (
    <Box component="footer" py={2}>
      <Typography>
        &copy; {new Date().getFullYear()} Rick And Morty Api. All Rights
        Reserved.
      </Typography>
    </Box>
  );
};
