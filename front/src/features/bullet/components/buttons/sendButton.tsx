import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, IconButtonProps } from "@mui/material";
export const SendButton = ({ onClick }: Omit<IconButtonProps, "children">) => {
  return (
    <IconButton onClick={onClick}>
      <SendIcon />
    </IconButton>
  );
};
