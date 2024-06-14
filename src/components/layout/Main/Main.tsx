import Box from "@mui/material/Box";
import { PropsWithRequiredChildren } from "../../../types/PropsWithRequiredChildren";

export const Main = ({ children }: PropsWithRequiredChildren) => {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      {children}
    </Box>
  );
};
