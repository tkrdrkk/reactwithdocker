import { useState, useEffect } from "react";

type Timezone =
  | "morning"
  | "noon"
  | "afternoon"
  | "evening"
  | "night"
  | "midnight";

const getCurrentTimezone = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && 10 > hour) return "morning";
  if (hour >= 10 && 13 > hour) return "noon";
  if (hour >= 13 && 16 > hour) return "afternoon";
  if (hour >= 16 && 19 > hour) return "evening";
  if (hour >= 19 && 21 > hour) return "night";
  return "midnight";
};

export const useTimezone = () => {
  const [currentTimezone, setCurrentTimezone] = useState<Timezone>("morning");
  useEffect(() => {
    setCurrentTimezone(getCurrentTimezone());

    return () => {
      setCurrentTimezone("morning");
    };
  }, []);

  const getCurrentItem = <T>([
    morningItem,
    noonItem,
    afternoonItem,
    eveningItem,
    nightItem,
    midnightItem,
  ]: T[]) => {
    const itemMap = {
      morning: morningItem,
      noon: noonItem,
      afternoon: afternoonItem,
      evening: eveningItem,
      night: nightItem,
      midnight: midnightItem,
    };
    return itemMap[getCurrentTimezone()];
    // if (hour > 6 && 10 > hour) return morningItem;
    // if (hour >= 10 && 13 > hour) return noonItem;
    // if (hour >= 13 && 16 > hour) return afternoonItem;
    // if (hour >= 16 && 19 > hour) return eveningItem;
    // if (hour >= 19 && 21 > hour) return nightItem;

    // return midnightItem;
  };

  return { currentTimezone, getCurrentItem };
};
