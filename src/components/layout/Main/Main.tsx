import Box from "@mui/material/Box";
import { PropsWithRequiredChildren } from "types/types";

export const Main = ({ children }: PropsWithRequiredChildren) => {
  return (
    <Box
      component="main"
      sx={{ flex: 1, height: "100%", display: "flex", flexDirection: "column" }}
    >
      {children}
    </Box>
  );
};
