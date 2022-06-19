import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import {
  AppBar,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { GlobalMenuModal } from "components/modals/globalMenuModal";
import { useToggle } from "hooks/useToggle";
import { ShootBulletModal } from "features/bullet/components/ShootBulletModal";

export const Header = () => {
  const { isOpen: isOpenMenu, open: openMenu, close: closeMenu } = useToggle();
  const {
    isOpen: isOpenShootBullet,
    open: openShootBullet,
    close: closeShootBullet,
  } = useToggle();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    openMenu();
  };

  const handleCloseMenu = () => {
    closeMenu();
  };
  const handleOpenShootBullet = (event: React.MouseEvent<HTMLElement>) => {
    openShootBullet();
  };

  const handleCloseShootBullet = () => {
    closeShootBullet();
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
            aria-label="menu"
            sx={{
              mr: 2,
              color: "yellow",
              backgroundColor: "silver",
              borderRadius: "10px",
            }}
            onClick={handleOpenShootBullet}
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
        {/* <div>
          <Select>
            {[
              "morning",
              "noon",
              "afternoon",
              "evening",
              "night",
              "midnight",
            ].map((tz) => (
              <MenuItem key={tz} value={tz}>
                {tz}
              </MenuItem>
            ))}
          </Select>
        </div> */}
      </Toolbar>
      <GlobalMenuModal open={isOpenMenu} onClose={handleCloseMenu} />
      <ShootBulletModal
        open={isOpenShootBullet}
        onClose={handleCloseShootBullet}
        forceClose={handleCloseShootBullet}
      />
    </AppBar>
  );
};
