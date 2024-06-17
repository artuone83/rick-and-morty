import { createTheme } from '@mui/material/styles';

const DARK_BROWN = '#44281d';
const LIGHT_ORANGE = '#e4a788';
const YELLOW = '#f0e14a';
const GREEN = '#97ce4c';
const LIGHT_PINK = '#e89ac7';

export const theme = createTheme({
  palette: {
    primary: {
      main: DARK_BROWN,
    },
    secondary: {
      main: LIGHT_ORANGE,
    },
    warning: {
      main: YELLOW,
    },
    success: {
      main: GREEN,
    },
    info: {
      main: LIGHT_PINK,
    },
  },
  typography: {
    h1: {
      color: DARK_BROWN,
    },
    h2: {
      color: DARK_BROWN,
    },
    h3: {
      color: DARK_BROWN,
    },
    h4: {
      color: DARK_BROWN,
    },
    h5: {
      color: DARK_BROWN,
    },
    h6: {
      color: DARK_BROWN,
    },
    subtitle1: {
      color: DARK_BROWN,
    },
    subtitle2: {
      color: DARK_BROWN,
    },
    body1: {
      color: DARK_BROWN,
    },
    body2: {
      color: DARK_BROWN,
    },
    button: {
      color: DARK_BROWN,
    },
    caption: {
      color: DARK_BROWN,
    },
    overline: {
      color: DARK_BROWN,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: DARK_BROWN,
          padding: 8,
        },
        head: {
          fontWeight: 'bolder',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgb(240, 225, 74, 0.25)',
          },
        },
        head: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});
