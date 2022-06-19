import { Box, Button, IconButton, ModalProps } from "@mui/material";
import { PlainModal } from "./plainModal";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useAuthenticator } from "@aws-amplify/ui-react";
export const GlobalMenuModal = ({
  open,
  onClose,
  ...others
}: Omit<ModalProps, "children">) => {
  const { signOut } = useAuthenticator();
  return (
    <PlainModal open={open} onClose={onClose} {...others}>
      <h1>Here's PlainModal</h1>
      <div
        style={{
          flexDirection: "column",
          justifySelf: "right",
        }}
      >
        <IconButton
          onClick={() => {
            signOut();
          }}
        >
          <LogoutOutlinedIcon />
        </IconButton>
      </div>
    </PlainModal>
  );
};
