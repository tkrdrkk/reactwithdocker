import { Box, Button, Modal, ModalProps, styled } from "@mui/material";
import mountainPhoto from "images/simon-berger-twukN12EN7c-unsplash.jpg";

const StyledModal = styled(Modal)({
  // backgroundImage: `url(${mountainPhoto})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
});

export const GlobalMenuModal = ({
  open,
  onClose,
  ...others
}: Omit<ModalProps, "children">) => {
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
          // border: "2px solid #000",
          p: 4,
        }}
      >
        <p
          style={{
            padding: 4,
            display: "grid",
            justifyContent: "center",
          }}
        >
          <h1>Here's GlobalMenuModal</h1>
          <p
            style={{
              flexDirection: "column",
              justifySelf: "right",
            }}
          >
            <div>
              <Button
                onClick={() => {
                  alert("hello");
                }}
                variant="contained"
              >
                Hello!
              </Button>
            </div>
          </p>
        </p>
      </Box>
    </StyledModal>
  );
};
