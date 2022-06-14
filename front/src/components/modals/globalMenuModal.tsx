import { Button, ModalProps } from "@mui/material";
import { PlainModal } from "./plainModal";

export const GlobalMenuModal = ({
  open,
  onClose,
  ...others
}: Omit<ModalProps, "children">) => {
  return (
    <PlainModal open={open} onClose={onClose} {...others}>
      <h1>Here's PlainModal</h1>
      <div
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
      </div>
    </PlainModal>
  );
};
