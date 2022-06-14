import { useState, useEffect } from "react";
import { Bullet, OnCreateBulletSubscription } from "api/graphql/API";
import { listBullets } from "../apis/listBullets";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateBullet } from "api/graphql/subscriptions";
import Observable, { ZenObservable } from "zen-observable-ts";

export const useBullets = () => {
  const [bullets, setBullets] = useState<Bullet[]>([]);

  useEffect(() => {
    // 初回の一覧表示
    listBullets().then((res) => {
      setBullets(res);
    });
    // 購読
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
            console.dir(newBullet);
            setBullets((prev) => [...prev, newBullet]);
          }
        },
      });
    }

    return () => {
      subscription.unsubscribe();
      setBullets([]);
    };
  }, []);

  useEffect(() => {
    console.log(bullets);
  }, [bullets]);

  return { bullets };
};
