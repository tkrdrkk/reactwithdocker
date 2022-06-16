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

const subscribeOnCreateBullet = (setBullets: (newBullet: Bullet) => void) => {
  const client = API.graphql(graphqlOperation(onCreateBullet));
  let subscription: ZenObservable.Subscription;
  if ("subscribe" in client) {
    subscription = client.subscribe({
      next: ({
        value: { data },
      }: {
        value: { data: OnCreateBulletSubscription };
      }) => {
        if (data.onCreateBullet) {
          const newBullet: Bullet = data.onCreateBullet;
          setBullets(newBullet);
        }
      },
    });
    return subscription;
  }
};
const subscribeOnDeleteBullet = (
  setBullets: (deletedBullet: Bullet) => void
) => {
  const client = API.graphql(graphqlOperation(onDeleteBullet));
  let subscription: ZenObservable.Subscription;
  if ("subscribe" in client) {
    subscription = client.subscribe({
      next: ({
        value: { data },
      }: {
        value: { data: OnDeleteBulletSubscription };
      }) => {
        if (data.onDeleteBullet) {
          const deletedBullet: Bullet = data.onDeleteBullet;
          setBullets(deletedBullet);
        }
      },
    });
    return subscription;
  }
};

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
