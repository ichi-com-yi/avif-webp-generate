# avif と webp を生成するリポジトリ
主に社内用。
gulpを使ってavif と webp を生成します。
## ディレクトリ
```
.
├── .editorconfig
├── .gitignore
├── README.md
├── assets
│   └── images
├── gulpfile.js
├── package-lock.json
└── package.json
```
- `.editorconfig`  EditorConfigの設定ファイル
- `.gitignore`     gitの除外ファイル
- `README.md`      説明などを記載
- `assets`         imagesファイルを格納するassetsファイル
  - `images`       この中に該当する画像を格納する
- `gulpfile.js`    gulpファイル
- `package.json`   パッケージが記載されたファイル



-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

## 使用方法
<span style="color:red;">※</span> 開発は、`package.json`が配置してあるルートディレクトリにて行います。  
その他のディレクトリだと、gulpが動作しないので注意してください。
<br>

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

## 各パッケージのインストール
```
npm install
```
package.jsonで設定されている各パッケージをローカルにインストールします。<br>
`node_modules`が作成されます。

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

## 基本的なコマンド・スクリプト
```
npx gulp imageConversion
```

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

## 参考サイト
以下のサイトを参考に作成させていただきました。
- [gulpでjpg・pngからAVIF画像を生成する](https://notes.sharesl.net/articles/2679/)

- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
