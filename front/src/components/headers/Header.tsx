import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { GlobalMenuModal } from "components/modals/globalMenuModal";
import { useToggle } from "hooks/useToggle";
import { ShootBulletModal } from "features/bullet/components/ShootBulletModal";

export const Header = () => {
  const { isOpen: isOpenMenu, open: openMenu, close: closeMenu } = useToggle();
  const {
    isOpen: isOpenShotBullet,
    open: openShotBullet,
    close: closeShotBullet,
  } = useToggle();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    openMenu();
  };

  const handleCloseMenu = () => {
    closeMenu();
  };
  const handleOpenShotBullet = (event: React.MouseEvent<HTMLElement>) => {
    openShotBullet();
  };

  const handleCloseShotBullet = () => {
    closeShotBullet();
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
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, border: "1px #000 solid" }}
            onClick={handleOpenShotBullet}
          >
            <AddIcon />
          </IconButton>
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Bulletme
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
      <GlobalMenuModal open={isOpenMenu} onClose={handleCloseMenu} />
      <ShootBulletModal
        open={isOpenShotBullet}
        onClose={handleCloseShotBullet}
        forceClose={handleCloseShotBullet}
      />
    </AppBar>
  );
};
