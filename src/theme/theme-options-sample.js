import { components } from "./components";
import { typography } from "./typography";
import { primary, themeColors } from "./theme-colors";
/********************************************
 * You can delete themeOptions.ts file and
 * rename this file to `themeOptions.ts`
 * Follow the documentation for more details
 *********************************************/

const THEMES = {
  GIFT: "GIFT",
  HEALTH: "HEALTH",
  DEFAULT: "DEFAULT",
  GROCERY: "GROCERY",
  FURNITURE: "FURNITURE"
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1600,
    xxl: 1920
  }
};
const themesOptionList = {
  [THEMES.DEFAULT]: {
    typography,
    breakpoints,
    components: { ...components
    },
    palette: {
      primary: { ...primary,
        light: primary[100]
      },
      ...themeColors
    }
  } 
//   [THEMES.GROCERY]: {
  
//     typography,
  
//     breakpoints,
  
//     components: { ...components },
  
//     palette: { primary: { ...primary, light: primary[100] }, ...themeColors },
  
//   },
  
//   [THEMES.FURNITURE]: {
  
//     typography,
  
//     breakpoints,
  
//     components: { ...components },
  
//     palette: { primary: { ...paste, light: paste[100] }, ...themeColors },
  
//   },
  
//   [THEMES.HEALTH]: {
  
//     typography,
  
//     breakpoints,
  
//     components: { ...components },
  
//     palette: { primary: { ...blue, light: blue[100] }, ...themeColors },
  
//   },
  
//   [THEMES.GIFT]: {
  
//     typography,
  
//     breakpoints,
  
//     components: { ...components },
  
//     palette: { primary: { ...marron, light: marron[100] }, ...themeColors },
  
//   },

};

const themeOptions = () => {
  
// YOU CAN SET ANOTHER THEME HERE E.G. [THEMES.GROCERY] OR [THEMES.FURNITURE] ETC.
  let themeOption = themesOptionList[THEMES.DEFAULT];
  return themeOption;
};

export default themeOptions;