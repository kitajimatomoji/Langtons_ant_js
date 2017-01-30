# Langtons_ant

「ラングトンの蟻」をオブジェクト指向モデリング（クラス図、シーケンス図）と、その検証のための実装サンプルです。


## Description

- langtons_ant_drawio.xml

クラス図とシーケンス図。「draw.io」というツールを使って描画しました。
https://www.draw.io/

[File] > [Open from] > [Device...]
で、上記xmlファイルを開いて下さい。

- src/

上記クラス図に基づく実装です。内訳は下記「Features」に記します。


## Features

- src/main.js
  window.onload イベントを受け、下記リソースを使って「ラングトンの蟻」を実行します。

- src/game_master.js
  GameMaster クラスの実装です。

- src/ant.js
  Ant クラスの実装です。

- src/field.js
  Field クラスの実装です。

- src/drawer.js
  Drawer およびその派生クラスの HTMLCanvasDrawer クラスの実装です。


## Author

Tomoji Kitajima

