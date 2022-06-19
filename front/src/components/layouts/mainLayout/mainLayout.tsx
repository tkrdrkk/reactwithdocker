import React, { ReactNode } from "react";
import { Header } from "components/headers/Header";

import morningSky from "images/alessio-soggetti-gdE-5Oui1Y0-unsplash.jpg";
import noonSky from "images/lora-p-hVb6RvCJ_ug-unsplash.jpg";
import afternoonSky from "images/ethan-m-Ki3Ynxop_e4-unsplash.jpg";
import eveningSky from "images/anton-darius-ebHCU8n7G38-unsplash.jpg";
import nightSky from "images/nathan-anderson-L95xDkSSuWw-unsplash.jpg";
import midnightSky from "images/wassim-chouak-q31_r7kvVSI-unsplash.jpg";
import { useTimezone } from "hooks/useTimezone";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { getCurrentItem } = useTimezone();

  const currentImage = getCurrentItem([
    morningSky,
    noonSky,
    afternoonSky,
    eveningSky,
    nightSky,
    midnightSky,
  ]);

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage})`,
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
          display: "flex",
          padding: 1,
          flexGrow: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {children}
      </div>

      <footer style={{ textAlign: "center" }}>
        ©tokiorush {new Date().getFullYear()}
      </footer>
    </div>
  );
};
