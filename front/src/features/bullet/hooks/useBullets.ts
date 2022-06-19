import { useState, useEffect } from "react";
import { Bullet } from "api/graphql/API";
import { listBullets } from "../apis/listBullets";
import {
  subscribeOnCreateBullet,
  subscribeOnDeleteBullet,
} from "../apis/subscribeOnBullet";

export const useBullets = () => {
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const forceListBullets = () => {
    listBullets().then((res) => setBullets(res));
  };

  useEffect(() => {
    // 初回の一覧表示
    listBullets().then((res) => {
      setBullets(res);
    });
    // 購読
    const subscriptionOnCreate = subscribeOnCreateBullet((newBullet) => {
      setBullets((prev) => [newBullet, ...prev]);
    });
    const subscriptionOnDelete = subscribeOnDeleteBullet((deletedBullet) => {
      setBullets((prev) => [...prev].filter((b) => b.id !== deletedBullet.id));
    });

    return () => {
      subscriptionOnCreate?.unsubscribe();
      subscriptionOnDelete?.unsubscribe();
      setBullets([]);
    };
  }, []);

  return { bullets, forceListBullets };
};
