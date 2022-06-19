import React from "react";
import { MainLayout } from "components/layouts/mainLayout/mainLayout";
import { MainThemeProvider } from "themes/MainThemeProvider";
import { TodoPanel } from "features/todo/components/todoPanel";
import { BooksPanel } from "features/books/components/booksPanel";
import { WeatherPanel } from "features/weather/components/weatherPanel";
import { Box, TextField } from "@mui/material";
import { BulletPanel } from "features/bullet/components/BulletPanel";
import { AuthProvider } from "auth/components/authProvider";
import Amplify from "aws-amplify";

import awsconfig from "aws-exports";
Amplify.configure(awsconfig);

export const Main = () => {
  return (
    <AuthProvider>
      <MainThemeProvider>
        <MainLayout>
          <Box
          // display="grid"
          // height="1fr"
          // gridTemplateColumns={"50% 50%"}
          // gridTemplateRows={"100px 1fr 1fr"}
          // gridTemplateAreas={`
          // " Title       Title        "
          // " TodoPanel   BulletPanel  "
          // " BooksPanel  BulletPanel  "
          // `}
          // width="100vw"
          >
            <h1 style={{ gridArea: "Title", textAlign: "center" }}>
              Here you are!
            </h1>
            {/* <TodoPanel />
            <BooksPanel /> */}
            <BulletPanel />
          </Box>
        </MainLayout>
      </MainThemeProvider>
    </AuthProvider>
  );
};
