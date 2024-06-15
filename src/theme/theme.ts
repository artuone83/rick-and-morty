import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#44281d", // Dark brown
    },
    secondary: {
      main: "#e4a788", // Light orange
    },
    warning: {
      main: "#f0e14a", // Yellow
    },
    success: {
      main: "#97ce4c", // Green
    },
    info: {
      main: "#e89ac7", // Light pink
    },
  },
  typography: {
    h1: {
      color: "#44281d",
    },
    h2: {
      color: "#44281d",
    },
    h3: {
      color: "#44281d",
    },
    h4: {
      color: "#44281d",
    },
    h5: {
      color: "#44281d",
    },
    h6: {
      color: "#44281d",
    },
    subtitle1: {
      color: "#44281d",
    },
    subtitle2: {
      color: "#44281d",
    },
    body1: {
      color: "#44281d",
    },
    body2: {
      color: "#44281d",
    },
    button: {
      color: "#44281d",
    },
    caption: {
      color: "#44281d",
    },
    overline: {
      color: "#44281d",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#44281d",
          padding: 8,
        },
        head: {
          fontWeight: "bolder",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgb(240, 225, 74, 0.25)",
          },
        },
        head: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});
