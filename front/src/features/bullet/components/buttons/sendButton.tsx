import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, IconButtonProps } from "@mui/material";

// 基本はformタグ内で使う。特定のクリックイベントがあれば指定する。
export const SendButton = ({ onClick }: Omit<IconButtonProps, "children">) => {
  return (
    <IconButton type="submit" onClick={onClick}>
      <SendIcon />
    </IconButton>
  );
};
