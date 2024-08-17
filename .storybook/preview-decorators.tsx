// .storybook/preview.tsx
import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme as styledTheme } from "../src/style/theme";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const muiTheme = createTheme();

const previewDecorator: Decorator = (Story, context) => {
  return (
    <Router>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={styledTheme}>
          <Story {...context} />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </Router>
  );
};

export default [previewDecorator];
