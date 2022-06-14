import { Button, ModalProps, TextField } from "@mui/material";
import { Bullet } from "api/graphql/API";
import { PlainModal } from "components/modals/plainModal";
import { useState } from "react";
import { createBullet } from "../apis/createBullet";
import { useBullet } from "../hooks/useBullet";

export const ShotBulletModal = ({
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
      <h1>Shot a bullet!</h1>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px #000 solid",
          height: "100%",
        }}
      > */}
      <TextField label={"subject"} onChange={handleChangeSubject} />
      <TextField label={"body"} onChange={handleChangeBody} />
      <Button
        onClick={handleClickShot}
        variant="contained"
        sx={{ position: "absolute", right: "20%", bottom: "20%" }}
      >
        Shot!
      </Button>
      {/* </div> */}
    </PlainModal>
  );
};
