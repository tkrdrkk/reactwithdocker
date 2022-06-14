import React, { useEffect } from "react";
import { PlainPanel } from "components/panels/plainPanel";
import { useBullets } from "../hooks/useBullets";

export const BulletPanel = () => {
  const { bullets } = useBullets();

  useEffect(() => {
    console.dir(bullets.map((b) => b.subject));
  }, [bullets]);
  return (
    <PlainPanel title="BulletPanel">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          overflowY: "auto",
          overflowX: "auto",
          maxHeight: "100%",
        }}
      >
        {bullets.map((b) => (
          <div
            key={b.id}
            style={{
              backgroundColor: "white",
              margin: "1px",
            }}
          >
            <div>{b.subject}</div>
            <div>{b.body}</div>
          </div>
        ))}
      </div>
    </PlainPanel>
  );
};
