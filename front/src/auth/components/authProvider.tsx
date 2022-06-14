import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import React, { PropsWithChildren } from "react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <Authenticator>
      {({ signOut, user }) => <div>{children}</div>}
    </Authenticator>
  );
};
