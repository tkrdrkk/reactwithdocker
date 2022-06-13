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
      border="1px #000 dashed"
      p={1}
      m={1}
      gridArea={title}
      boxShadow={10}
      borderRadius={"16px"}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </Box>
  );
};
