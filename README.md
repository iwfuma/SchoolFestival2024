## 学園祭(2024)
このリポジトリは、2024年学園祭で作成したプロジェクトをベースに、ReactとGitHubを用いて再構築したバージョンです。
元のオリジナルファイルは original-2024 ブランチに保管しています。

## 環境構築
### 前提条件

- Docker Desktop（またはDocker Engine）がインストールされていること
- Docker Composeがインストールされていること（Docker Desktopには含まれています）

### 初回起動手順

1. リポジトリをクローン（まだの場合）

   ```bash
   git clone <リポジトリURL>
   cd SchoolFestival2024
   ```

2. Dockerコンテナをビルドして起動

   ```bash
   docker compose up --build -d
   ```

   初回起動時は、依存関係のインストールとイメージのビルドに数分かかることがあります。

3. ブラウザでアクセス

   ビルドが完了し、開発サーバーが起動したら、ブラウザで以下のURLにアクセスしてください：

   ```
   http://localhost:5173
   ```


### トラブルシューティング

ポート5173が既に使用されている場合

- 他のアプリケーションがポート5173を使用している可能性があります
- `docker-compose.yml`の`ports`セクションでポート番号を変更してください（例: `"5174:5173"`）

依存関係が更新されない場合

- コンテナを停止して再ビルドしてください：
  ```bash
  docker compose down
  docker compose build --no-cache dev
  docker- ompose up --build -d
  ```

node_modulesが正しく動作しない場合

- ボリュームを削除して再起動してください：
  ```bash
  docker-compose down -v
  docker-compose up --build -d
  ```
