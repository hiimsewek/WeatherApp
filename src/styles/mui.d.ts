import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    paleblue: Palette["primary"];
  }

  interface PaletteOptions {
    paleblue?: PaletteOptions["primary"];
  }
}
