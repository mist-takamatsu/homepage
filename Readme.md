# MIST solution 高松支店 ホームページ

## アプリケーションの概要

MIST solution 高松支店でも、本社とは別でホームページを作成することになりました。

## アプリケーションの説明

- フレームワークにBootStrapを使う

- HUGOを使う

## 動作環境の作り方

下記リンクからHUGOをダウンロードし実行ファイルに環境変数を設定する

<https://github.com/gohugoio/hugo/releases>

（簡易的に試す場合「bin/（使用環境を選択）/」にある「hugo.bat」をsite直下に配置）

siteディレクトリで以下のコマンドを実行

hugo server

以下にアクセスする

<http://localhost:1313/>

## 構成要素

- ホスト：Netlify

- 静的サイトジェネレーター：HUGO

- CSSフレームワーク：BootStrap

## プログラム構成

フォルダ構成は基本的に以下の通りです。

<https://gohugo.io/getting-started/directory-structure/#readout>

その中でも主に「site/layouts/」以下のファイルを作成しています。

## ホスト

<https://mist-takamatsu-homepage-hugo.netlify.com>
