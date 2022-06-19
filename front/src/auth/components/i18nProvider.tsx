// ref: https://qiita.com/morio1101/items/c1dcca76cd96896769fc
import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui-react";

export const setJapanese = () => {
  I18n.putVocabularies(translations);
  I18n.setLanguage("ja");
  I18n.putVocabularies({
    ja: {
      "Back to Sign In": "サインイン画面に戻る",
      Confirm: "確認",
      "Confirm Sign Up": "サインアップの確認",
      "Confirmation Code": "確認コード",
      "Create Account": "新規登録",
      "Create a new account": "アカウントの新規登録",
      "Create account": "新規登録",
      Email: "メールアドレス",
      "Enter your code": "確認コードを入力してください",
      "Enter your password": "パスワードを入力してください",
      "Enter your username": "ユーザー名を入力してください",
      "Forgot your password?": "パスワードをお忘れの方 ",
      "Have an account? ": "アカウント登録済みの方 ",
      Hello: "こんにちは ",
      "Incorrect username or password":
        "ユーザー名またはパスワードが異なります",
      "Lost your code? ": "コードを紛失した方 ",
      "No account? ": "アカウント未登録の方 ",
      Password: "パスワード",
      "Phone Number": "電話番号",
      "Resend Code": "確認コードの再送",
      "Reset password": "パスワードのリセット",
      "Reset your password": "パスワードのリセット",
      "Send Code": "コードの送信",
      "Sign In": "サインイン",
      "Sign Out": "サインアウト",
      "Sign in": "サインイン",
      "Sign in to your account": "サインイン",
      "User does not exist": "ユーザーが存在しません",
      Username: "ユーザー名",
      "Username cannot be empty": "ユーザー名は必須入力です",
      "Username/client id combination not found.": "ユーザー名が見つかりません",
      "We Sent A Code": "認証コードを送信しました。",
      "Your code is on the way. To log in, enter the code we sent you. It may take a minute to arrive.":
        "認証コードを送信しました。コードを入力してログインしてください。コードを受信するまで、数分程度かかる場合があります。",
    },
  });
};
