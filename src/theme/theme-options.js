import { components } from "./components";
import { typography } from "./typography";
import { blue, marron, paste, primary, themeColors, orange, bluish, success, warning, gold } from "./theme-colors";
const THEMES = {
  GIFT: "GIFT",
  HEALTH: "HEALTH",
  DEFAULT: "DEFAULT",
  GROCERY: "GROCERY",
  PASTE: "PASTE",
  ORANGE: "ORANGE",
  GOLD: "GOLD",
  BLUISH: "BLUISH",
  GREEN: "GREEN",
  YELLOW: "YELLOW"
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
/*
WE CREATED MULTIPLE THEME OPTIONS FOR DIFFERENT SHOP VARIATION.

YOU CAN JUST KEEP [THEMES.DEFAULT] AND REMOVE OTHER THEME OPTIONS.
*/

const themesOptionList = {
  [THEMES.DEFAULT]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...primary,
        light: primary[100]
      },
      ...themeColors
    }
  },
  [THEMES.GROCERY]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...primary,
        light: primary[100]
      },
      ...themeColors
    }
  },
  [THEMES.PASTE]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...paste,
        light: paste[100]
      },
      ...themeColors
    }
  },
  [THEMES.HEALTH]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...blue,
        light: blue[100]
      },
      ...themeColors
    }
  },
  [THEMES.GIFT]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...marron,
        light: marron[100]
      },
      ...themeColors
    }
  },
  [THEMES.ORANGE]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...orange
      },
      ...themeColors
    }
  },
  [THEMES.GOLD]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...gold
      },
      ...themeColors
    }
  },
  [THEMES.BLUISH]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...bluish
      },
      ...themeColors
    }
  },
  [THEMES.GREEN]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...success
      },
      ...themeColors
    }
  },
  [THEMES.YELLOW]: {
    typography,
    components,
    breakpoints,
    palette: {
      primary: { ...warning
      },
      ...themeColors
    }
  }
};

const themeOptions = pathname => {
  let themeOption;
  /*
    YOU CAN ALSO REMOVE updateTheme function
    AND FOLLOWING ENTIRE switch case BLOCK.
  */

  const updateTheme = themeName => {
    themeOption = themesOptionList[themeName];
  };

  switch (pathname) {
    case "/":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/furniture-1":
      updateTheme(THEMES.PASTE);
      break;

    case "/medical":
      updateTheme(THEMES.PASTE);
      break;

    case "/furniture-2":
      updateTheme(THEMES.ORANGE);
      break;

    case "/furniture-3":
      updateTheme(THEMES.GOLD);
      break;

    case "/health-beauty":
      updateTheme(THEMES.HEALTH);
      break;

    case "/gift-shop":
      updateTheme(THEMES.GIFT);
      break;

    default:
      if (pathname.startsWith("/grocery-4")) {
        themeOption = themesOptionList[THEMES.GREEN];
      } else if (pathname.startsWith("/gadget-3")) {
        themeOption = themesOptionList[THEMES.HEALTH];
      } else if (pathname.startsWith("/admin") || pathname.startsWith("/vendor")) {
        themeOption = themesOptionList[THEMES.HEALTH];
      } else {
        themeOption = themesOptionList[THEMES.DEFAULT];
      }

      break;
  }
  /*
        IF YOU REMOVE THE switch case, YOU NEED TO ASSIGN VALUE TO themeOptions
        E.G. themeOption = themesOptions[THEMES.DEFAULT];
    */
  
// themeOption = themesOptions[THEMES.DEFAULT];


  return themeOption;
};

export default themeOptions;