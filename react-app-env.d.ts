/// <reference types="react-scripts" />

declare module "*.png";
declare module "*.jpg";

declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.styl" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "js-md5" {
  export default function (value: string): string;
}

declare module "@mui/material/styles" {
  interface Palette {
    setting: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    setting?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    setting: true;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VIEWPORTWIDTH: number;
    }
  }
}
