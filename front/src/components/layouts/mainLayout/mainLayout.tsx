import React, { ReactNode } from "react";
import sunsetImage from "images/sunset.jpg";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <p
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            backgroundImage: `url(${sunsetImage})`,
            backgroundSize: "contain",
            width: "100vw",
            height: "100vh",
            // padding: 200,
            // margin: 10,
          }}
        >
          {children}
        </p>
      </p>
    </>
  );
};
