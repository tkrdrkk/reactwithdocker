import { Bullet } from "api/graphql/API";
import { useState, useEffect } from "react";

export const useBullet = () => {
  const [bullet, setBullet] = useState({ subject: "", body: "" } as Bullet);
  const setSubject = (subject: Bullet["subject"]) => {
    setBullet((prev) => ({ ...prev, subject: subject }));
  };
  const setBody = (body: Bullet["body"]) => {
    setBullet((prev) => ({ ...prev, body: body }));
  };
  const resetBullet = () => {
    setBullet({ subject: "", body: "" } as Bullet);
  };

  return { bullet, setSubject, setBody, resetBullet };
};
