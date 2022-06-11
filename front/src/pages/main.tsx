import React from "react";
import { MainLayout } from "components/layouts/mainLayout/mainLayout";
import { MainThemeProvider } from "themes/MainThemeProvider";

export const Main = () => {
  return (
    <MainThemeProvider>
      <MainLayout>
        <h1 style={{ fontFamily: "monospace" }}>sunsetting...</h1>
      </MainLayout>
    </MainThemeProvider>
  );
};
