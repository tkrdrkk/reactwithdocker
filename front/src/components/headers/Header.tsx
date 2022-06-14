import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { GlobalMenuModal } from "components/modals/globalMenuModal";
import { useToggle } from "hooks/useToggle";

export const Header = () => {
  const { isOpen: isOpenMenu, open: openMenu, close: closeMenu } = useToggle();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    openMenu();
  };

  const handleClose = () => {
    closeMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", color: "black" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Photos
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
      <GlobalMenuModal open={isOpenMenu} onClose={handleClose} />
    </AppBar>
  );
};
