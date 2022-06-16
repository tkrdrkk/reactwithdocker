import { Authenticator, Theme } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import styles from "./authProvider.module.css";

import { PropsWithChildren } from "react";
import { setJapanese } from "./i18nProvider";

// 日本語化
setJapanese();

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <Authenticator
      hideSignUp
      variation="modal"
      className={styles.authenticator}
    >
      <Authenticator.Provider>{children}</Authenticator.Provider>
    </Authenticator>
  );
};
