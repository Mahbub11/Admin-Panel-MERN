// import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

//
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";
// hooks
import { useSelector } from "react-redux";
import { themeSettings } from "../theme";
import useSettings from "../hooks/useSettings";

// ----------------------------------------------------------------------

// ThemeProvider.propTypes = {
//   children: PropTypes.node,
// };

export default function ThemeProvider({ children }) {
    const { themeMode, themeDirection } = useSettings();

  // const {mode}= useSelector((state)=> state.global);
  // // this is form Redux
  // console.log(mode);
  // const theme= useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  const isLight = themeMode === "light";

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark, 
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      // direction: themeDirection,
      shadows: shadows.light,
      customShadows:customShadows.light ,
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);

  

  theme.components = componentsOverride(theme); // ex: Typography(someThemeDirection)-> applied in Theme

  

  return (

    // this injection as immportant flag on to our custom design
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>

        {/* This allow to make chage over all screen */}
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
