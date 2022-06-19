import React, { useEffect } from "react";
import { PlainPanel } from "components/panels/plainPanel";
import { useBullets } from "../hooks/useBullets";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { deleteBullet } from "../apis/deleteBullet";
import { useBullet } from "../hooks/useBullet";
import { createBullet } from "../apis/createBullet";
import { SendButton } from "./buttons";
import { useToggle } from "hooks/useToggle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CachedIcon from "@mui/icons-material/Cached";

export const BulletPanel = () => {
  const { bullets, forceListBullets } = useBullets();
  const { bullet, setSubject, setBody, resetBullet } = useBullet();
  const handleChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };
  const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    createBullet({ ...bullet });
    resetBullet();
    event.preventDefault();
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
          maxHeight: "75vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <IconButton onClick={forceListBullets}>
            <CachedIcon />
          </IconButton>
        </div>
        <Accordion
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "70%",
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "10px 0",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontFamily={"cursive"}>
              Shoot some!
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "70%",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                sx={{ m: 1 }}
                label={"subject"}
                onChange={handleChangeSubject}
                value={bullet.subject}
              />
              <Box display="flex">
                <TextField
                  sx={{ m: 1, flexGrow: 1 }}
                  label={"body"}
                  onChange={handleChangeBody}
                  value={bullet.body}
                />
                <SendButton />
              </Box>
            </form>
          </AccordionDetails>
        </Accordion>
        {bullets.reverse().map((b) => (
          <div
            key={b.id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{ margin: 1, fontWeight: "bold", fontFamily: "cursive" }}
              >
                {b.subject}
              </div>
              <div style={{ margin: 1 }}>{b.createdAt}</div>
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
