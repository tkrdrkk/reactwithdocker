---
title: 気づいたことなど
---

docker 自体の理解として正しいのかわからんが

- これまで npm start したときのローカルサーバーがターミナルに内包？されていた。これによりサーバー起動中に git コマンドや npm コマンドを実行したり、VSCode 自体の再起動をかけたいという場合も毎回サーバーを落とす必要があった
- docker のお陰でローカルサーバーが独立したので、上記が簡単になった

いや、普通に二つ shell 起動すればいいんじゃね…
