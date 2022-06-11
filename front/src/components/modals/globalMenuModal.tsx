import { Box, Button, Modal, ModalProps, styled } from "@mui/material";
import mountainPhoto from "images/simon-berger-twukN12EN7c-unsplash.jpg";

const StyledModal = styled(Modal)({
  // backgroundImage: `url(${mountainPhoto})`,
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
          width: "50vw",
          height: "50vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          // border: "2px solid #000",
          p: 4,
          backgroundImage: `url(${mountainPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            // border: "2px solid #000",
            // margin: 4,
            padding: 4,
            // height: "50vh",
            display: "grid",
            justifyContent: "center",
          }}
        >
          <h1>Here's GlobalMenuModal</h1>
          <p
            style={{
              flexDirection: "column",
              border: "1px black dashed",
              justifySelf: "right",
            }}
          >
            <p>
              <Button
                onClick={() => {
                  alert("hello");
                }}
                variant="contained"
              >
                Hello!
              </Button>
            </p>
            <Button
              onClick={() => {
                alert("hello");
              }}
              variant="contained"
            >
              Hello!
            </Button>
          </p>
        </p>
      </Box>
    </StyledModal>
  );
};
