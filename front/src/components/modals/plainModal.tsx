import { Box, Button, Modal, ModalProps, styled } from "@mui/material";
import mountainPhoto from "images/simon-berger-twukN12EN7c-unsplash.jpg";
import { ReactNode } from "react";

const StyledModal = styled(Modal)({
  // backgroundImage: `url(${mountainPhoto})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
});

export const PlainModal = ({
  open,
  onClose,
  children,
  ...others
}: Omit<ModalProps, "children"> & { children: ReactNode }) => {
  return (
    <StyledModal open={open} onClose={onClose} {...others}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "75vw",
          height: "75vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          border: "2px solid #000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            border: "1px dashed #0A0",
            height: "80%",
            width: "80%",
          }}
        >
          {children}
        </Box>
      </Box>
    </StyledModal>
  );
};
