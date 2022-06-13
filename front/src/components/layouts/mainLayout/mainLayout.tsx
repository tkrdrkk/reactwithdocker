import React, { ReactNode } from "react";
import { Header } from "components/headers/Header";

import morningSky from "images/alessio-soggetti-gdE-5Oui1Y0-unsplash.jpg";
import eveningSky from "images/anton-darius-ebHCU8n7G38-unsplash.jpg";
import nightSky from "images/nathan-anderson-L95xDkSSuWw-unsplash.jpg";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const currentImage = () => {
    const hour = new Date().getHours();
    if (hour > 7 && 15 > hour) {
      return morningSky;
    }
    if (hour >= 15 && 19 > hour) {
      return eveningSky;
    }
    return nightSky;
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${currentImage()})`,
        backgroundImage: `url(${morningSky})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          padding: 10,
          border: "2px #000 dashed", // FIXME for dev
          flexGrow: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
