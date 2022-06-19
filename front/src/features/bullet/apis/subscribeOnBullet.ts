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

export const subscribeOnCreateBullet = (
  setBullets: (newBullet: Bullet) => void
) => {
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
export const subscribeOnDeleteBullet = (
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
