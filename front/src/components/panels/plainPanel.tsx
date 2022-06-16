import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

export const PlainPanel = ({
  children,
  title,
}: PropsWithChildren & { title: string }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={1}
      m={1}
      gridArea={title}
      boxShadow={10}
      borderRadius={"16px"}
    >
      <h3>{title}</h3>
      <div style={{ width: "90%" }}>{children}</div>
    </Box>
  );
};
