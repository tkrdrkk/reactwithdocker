import { Box, Button, Typography } from "@mui/material";
import { PlainPanel } from "components/panels/plainPanel";
import React from "react";
import { useBooks } from "../hooks/useBooks";

export const BooksPanel = () => {
  const { books } = useBooks();
  return (
    <PlainPanel title="BooksPanel">
      <Box display="flex">
        {books.map((book) => (
          <Box
            key={book.name}
            sx={{
              bgcolor: "white",
              p: "20px",
              m: 1,
              height: "20vh",
              boxShadow: "10px",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Typography>Title: {book.name}</Typography>
            <Typography>Author: {book.author}</Typography>
            <Typography>Pages: {book.pages}</Typography>
            <Button
              variant="outlined"
              sx={{ position: "absolute", right: "10px", bottom: "10px" }}
            >
              Go!
            </Button>
          </Box>
        ))}
      </Box>
    </PlainPanel>
  );
};
