import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <Home/> */}
      </ThemeProvider>
    </div>
  );
};

export default App;
