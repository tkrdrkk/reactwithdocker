import { Button, ModalProps, TextField } from "@mui/material";
import { Bullet } from "api/graphql/API";
import { PlainModal } from "components/modals/plainModal";
import { useState } from "react";
import { createBullet } from "../apis/createBullet";
import { useBullet } from "../hooks/useBullet";

export const ShootBulletModal = ({
  open,
  onClose,
  forceClose,
  ...others
}: Omit<ModalProps, "children"> & { forceClose: () => void }) => {
  const { bullet, setSubject, setBody } = useBullet();
  const handleChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };
  const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };
  const handleClickShot = () => {
    createBullet({ ...bullet }).then(() => {
      forceClose();
    });
  };

  return (
    <PlainModal open={open} onClose={onClose} {...others}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "70%",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Shoot a bullet!</h1>
        <TextField
          sx={{ m: 1 }}
          label={"subject"}
          onChange={handleChangeSubject}
        />
        <TextField sx={{ m: 1 }} label={"body"} onChange={handleChangeBody} />
        <div style={{ margin: "10% 5% 5% 10%", textAlign: "right" }}>
          <Button
            onClick={handleClickShot}
            variant="contained"
            // sx={{ position: "absolute", right: "20%", bottom: "20%" }}
          >
            Shoot!
          </Button>
        </div>
      </div>
    </PlainModal>
  );
};
