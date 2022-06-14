import React from "react";
import { MainLayout } from "components/layouts/mainLayout/mainLayout";
import { MainThemeProvider } from "themes/MainThemeProvider";
import { TodoPanel } from "features/todo/components/todoPanel";
import { BooksPanel } from "features/books/components/booksPanel";
import { WeatherPanel } from "features/weather/components/weatherPanel";
import { Box } from "@mui/material";

export const Main = () => {
  return (
    <MainThemeProvider>
      <MainLayout>
        <Box
          display="grid"
          // justifyContent="space-evenly"
          // gridTemplateColumns={"repeat(2, 1fr)"}
          gridTemplateColumns={"50% 50%"}
          gridTemplateRows={"100px 1fr 1fr"}
          gridTemplateAreas={`
          " title      title        "
          " TodoPanel  TodoPanel    "
          " BooksPanel WeatherPanel "
          `}
        >
          <h1 style={{ gridArea: "title", textAlign: "center" }}>
            Here you are!
          </h1>
          <TodoPanel />
          <BooksPanel />
          <WeatherPanel />
        </Box>
      </MainLayout>
    </MainThemeProvider>
  );
};
