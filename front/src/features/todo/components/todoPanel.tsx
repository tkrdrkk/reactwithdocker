import { Box, Button, Typography } from "@mui/material";
import { PlainPanel } from "components/panels/plainPanel";
import React from "react";
import { useTodos } from "../hooks/useTodo";

export const TodoPanel = () => {
  const { todos } = useTodos();
  return (
    <PlainPanel title="TodoPanel">
      <Box display="flex">
        {todos.map((todo) => (
          <Box
            key={todo.content}
            sx={{
              bgcolor: "white",
              p: "20px",
              m: 1,
              height: "20vh",
              boxShadow: "20px",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Typography>Subject: {todo.subject}</Typography>
            <Typography>ByWhen?: {todo.period.toDateString()}</Typography>
            <Typography>Content: {todo.content}</Typography>
            <Button
              variant="outlined"
              sx={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              Complete?
            </Button>
          </Box>
        ))}
      </Box>
    </PlainPanel>
  );
};
