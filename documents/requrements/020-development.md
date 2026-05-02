## 開発要件

### 1. 開発環境
- OS: macOS、Docker Desktopがインストールされていること。
- コンテナ: Docker Composeで開発環境を構築する。
- 実行: `docker compose up --build -d` でアプリを起動する。
- 実行確認: ブラウザで `http://localhost:5173` にアクセスする。

### 2. 使用技術
- フロントエンド: React、React Router、Vite。
- UI: MUI、CSS、CSSモジュール。
- データ保存: ブラウザの `localStorage` を利用した簡易状態保持。
- ビルド環境: `docker-compose.yml` で依存関係を管理し、開発コンテナ内で実行。

### 3. ソース構成
- `src/pages`:
  - `Login`：管理者ログイン画面
  - `Home`：学園祭ホーム画面
  - `oneClick`：One Click Home コンテンツ
  - `phissing`：フィッシング模擬ログイン画面
- `src/route/route.jsx`:
  - ルーティングと認証必須ルートを管理
- `src/utils/validation`:
  - メール・電話番号、およびパスワード入力検証ロジックを実装
- `src/styles`:
  - 全体スタイルとページ固有スタイルを整理

### 4. 環境変数
- `VITE_LOGIN_KEY`：ログイン画面のキー
- `VITE_LOGIN_PASSWORD`：ログイン画面のパスワード
- これらは `.env` もしくは Docker環境で設定し、アプリ起動時に参照する。

### 5. 開発要件
- 認証フローを最初に実装し、`PrivateRoute` でアクセス制限を担保する。
- 入力フォームは `validateEmailOrPhone` と `validatePassword` で検証し、エラーメッセージを表示する。
- `OneClickHome` は広告バナーと学科紹介コンテンツを持ち、遷移体験を再現する。
- `Phishing Mail` は疑似Amazonログイン画面を構築し、2段階入力と確認画面を実装する。
- エラー時や未入力時にのユーザーへわかりやすいフィードバックを出す。

### 6. 開発手順とチェックリスト
1. Docker Compose で実行環境を構築し、基本画面が表示されることを確認する。
2. 管理者ログインフローを実装し、認証なしで `/home` へアクセスできないことを確認する。
3. One Click Home の広告表示・閉じる・遷移動作を実装する。
4. Phishing Mail のメール入力、パスワード入力、確認画面を順に実装する。
5. 404ページとその他ルート遷移を確認する。
6. ブラウザ表示と動作を確認し、学園祭展示用に整理する。

### 7. 品質と運用
- コードは理解しやすく、コンポーネントを分割して保守性を高める。
- `localStorage` の利用はデモ用途に限定し、永続的な認証や個人情報保存は行わない。
- 画面遷移フローは自然な順序で、ユーザーに混乱を与えないように設計する。
