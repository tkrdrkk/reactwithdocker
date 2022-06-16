import React, { useEffect } from "react";
import { PlainPanel } from "components/panels/plainPanel";
import { useBullets } from "../hooks/useBullets";
import { Button } from "@mui/material";
import { deleteBullet } from "../apis/deleteBullet";

export const BulletPanel = () => {
  const { bullets } = useBullets();
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
      </div>
    </PlainPanel>
  );
};
