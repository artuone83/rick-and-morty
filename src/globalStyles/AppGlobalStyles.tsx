import { GlobalStyles } from "@mui/system";

export const AppGlobalStyles = () => {
  return (
    <GlobalStyles
      styles={{
        html: {
          height: "100%",
          boxSizing: "border-box",
        },
        body: {
          height: "100%",
          margin: 0,
          padding: 0,
          fontFamily: "Roboto, sans-serif",
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "column",
        },
        "*": {
          boxSizing: "inherit",
        },
        "#root": {
          height: "100%",
        },
      }}
    />
  );
};
