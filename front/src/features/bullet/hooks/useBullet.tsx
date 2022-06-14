import { useState, useEffect } from "react";
import { Bullet } from "api/graphql/API";

export const useBullets = () => {
  const [bullets, setBullets] = useState<Bullet[]>([]);
  useEffect(() => {
    setBullets([]);

    return () => {
      setBullets([]);
    };
  }, []);

  return { bullets };
};
