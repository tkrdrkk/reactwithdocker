import React, { useEffect } from "react";
import { PlainPanel } from "components/panels/plainPanel";
import { useBullets } from "../hooks/useBullets";
import { Box, Button, TextField } from "@mui/material";
import { deleteBullet } from "../apis/deleteBullet";
import { useBullet } from "../hooks/useBullet";
import { createBullet } from "../apis/createBullet";
import { SendButton } from "./buttons";

export const BulletPanel = () => {
  const { bullets } = useBullets();
  const { bullet, setSubject, setBody } = useBullet();
  const handleChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };
  const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };
  const handleClickShoot = () => {
    createBullet({ ...bullet });
  };
  return (
    <PlainPanel title="BulletPanel">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          overflowY: "auto",
          borderRadius: "20px",
          minWidth: "70%",
          maxHeight: "500px",
        }}
      >
        {bullets.map((b) => (
          <div
            key={b.id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "bold", fontFamily: "cursive" }}>
              {b.subject}
            </div>
            <div style={{ textAlign: "center", fontFamily: "cursive" }}>
              {b.body}
            </div>
            <div style={{ textAlign: "right" }}>
              <Button
                sx={{ textTransform: "none" }}
                onClick={() => {
                  deleteBullet({ id: b.id });
                }}
              >
                delete
              </Button>
            </div>
          </div>
        ))}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "70%",
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "10px 0",
            padding: "10px",
          }}
          onSubmit={handleClickShoot}
        >
          <TextField
            sx={{ m: 1 }}
            label={"subject"}
            onChange={handleChangeSubject}
          />
          <Box display="flex">
            <TextField
              sx={{ m: 1, flexGrow: 1 }}
              label={"body"}
              onChange={handleChangeBody}
            />
            <SendButton type="submit" onClick={handleClickShoot} />
          </Box>
        </form>
      </div>
    </PlainPanel>
  );
};
