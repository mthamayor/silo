import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import {
  ThemeProvider,
  useThemeColors,
} from "./providers/ThemeProvider/ThemeProvider";
import styled, { StyleSheetManager } from "styled-components";
import { ThemeColors } from "./providers/ThemeProvider/colors";
import { shouldForwardProp } from "./util/shouldForwardProp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider>
        <AppChild>
          <RouterProvider router={router} />
        </AppChild>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

function AppChild({ children }: React.PropsWithChildren) {
  const themeColors = useThemeColors();

  return <AppWrapper $themeColors={themeColors}>{children}</AppWrapper>;
}

const AppWrapper = styled.div<{ $themeColors: ThemeColors }>`
  background-color: ${({ $themeColors }) => $themeColors.BACKGROUND};
  color: ${({ $themeColors }) => $themeColors.TEXT_SECONDARY};
  min-height: 100vh;
`;

export default App;
