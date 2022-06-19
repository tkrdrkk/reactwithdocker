import { useState, useEffect } from "react";
import {
  Bullet,
  OnCreateBulletSubscription,
  OnDeleteBulletSubscription,
} from "api/graphql/API";
import { listBullets } from "../apis/listBullets";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateBullet, onDeleteBullet } from "api/graphql/subscriptions";
import { ZenObservable } from "zen-observable-ts";
import {
  subscribeOnCreateBullet,
  subscribeOnDeleteBullet,
} from "../apis/subscribeOnBullet";

export const useBullets = () => {
  const [bullets, setBullets] = useState<Bullet[]>([]);

  useEffect(() => {
    // 初回の一覧表示
    listBullets().then((res) => {
      setBullets(res);
    });
    // 購読
    const subscriptionOnCreate = subscribeOnCreateBullet((newBullet) => {
      setBullets((prev) => [...prev, newBullet]);
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

  return { bullets };
};
