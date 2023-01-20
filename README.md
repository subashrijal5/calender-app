# カレンダーの環境構築

## セットアップ

docker をインストールしたのちに、

```shell
$ make
```

これでもろもろインストールやビルドが終わります。`make`コマンドがない場合は、

```shell
$ npm --prefix ./front install ./front
$ npm --cwd ./front run build
$ npm --prefix ./server install ./server
$ cp ./server/env/env-local ./server/.env
```

の 4 つのコマンドを実行してください。

## サーバーの起動と停止

```shell
$ docker-compose up -d
```

を実行すると[localhost:8080]()にサーバーが立ち上がります。最初はいろいろインストールするので時間がかかると思います。

サーバーを止めたいときは、

```shell
$ docker-compose down
```

と実行すれば ok です。

API ドキュメントは[こちら](./server/README.md)

## フロントの開発をするとき

フロントは`webpack`でビルドしてやる必要があります。

```shell
$ cd front
$ npm run watch
```

とすると、ファイルの変更を検知して自動で差分のビルドが走るようになります。自動でビルドされたものはすぐに docker 内の nginx が配信してくれるので、変更のたびに何かコマンドを打つ必要はありません。



# Calendar Environment Setup

## Setup

After installing docker, run、

```shell
 make
```

If you don't have the `make` command, you can use

```shell
    npm --prefix ./front install ./front
    npm --cwd ./front run build
    npm --prefix ./server install ./server
    cp ./server/env/env-local ./server/.env
```

## Start and stop the server

```shell
 docker-compose up -d
```

the server will be started up on [localhost:8080]. It will take some time at first because of the various installations.。

If you want to stop the server, run、

```shell
$ docker-compose down
```

and you are good to go。

API documentation is here.(./server/README.md)

## When developing the front end

The front end needs to be built with webpack.

```shell
 cd front
 npm run watch
```

will detect file changes and automatically run a diff build. The automatic build will be immediately delivered by nginx in docker, so you don't need to type any commands every time you make a change.
