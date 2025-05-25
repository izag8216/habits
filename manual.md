# 【完全版】初心者向けGitHub入門ハンズオンチュートリアル 〜TaskManagerアプリ開発で学ぶ〜

このチュートリアルは、Git/GitHubの基本操作から、Webアプリのバージョン管理・公開・共同開発の基礎まで、初心者が迷わず実践できるようにステップバイステップで解説します。実際に「TaskManager」アプリを作りながら、現場で役立つ知識・コマンド・トラブル対処法まで網羅します。

---

## 目次
1. Git/GitHubとは？
2. 事前準備・環境構築
3. プロジェクトフォルダの作成
4. Gitの初期化
5. GitHubリポジトリの作成
6. リモートリポジトリの登録
7. ファイルの作成（HTML/CSS/JS）
8. 変更のステージングとコミット
9. GitHubへのプッシュ
10. READMEの作成とアップロード
11. コードの変更と再プッシュ
12. GitHubからのダウンロード・クローン・ファイル取得
13. ブランチの作成・切り替え・マージ
14. 変更履歴の確認・過去バージョンへの戻し方
15. よくあるトラブルと対処法
15.5. 特定ファイルをレポジトリから削除する方法
16. 便利Tips・用語集
17. GitHubの全体像と主な機能紹介（特にActions）
18. GitHub Actionsハンズオン：Habit Trackerアプリで学ぶCI/CD入門

---

## 1. Git/GitHubとは？
- **Git**: ファイルの変更履歴を管理できる分散型バージョン管理システム。
- **GitHub**: Gitリポジトリをインターネット上で共有・公開・共同編集できるサービス。
- プログラムだけでなく、ドキュメントやデザインファイルの管理にも活用されます。

## 2. 事前準備・環境構築
- Gitのインストール（`git --version`で確認）
- GitHubアカウント作成・ログイン
- ターミナル（macOS: Terminal, Windows: PowerShellやGit Bash）

## 3. プロジェクトフォルダの作成
```zsh
mkdir ~/projects/github/taskmanager
cd ~/projects/github/taskmanager
```

## 4. Gitの初期化
```zsh
git init
```

## 5. GitHubリポジトリの作成
1. [GitHub](https://github.com/)で「＋」→「New repository」
2. Repository nameに `taskmanager` と入力し「Create repository」

## 6. リモートリポジトリの登録
```zsh
git remote add origin https://github.com/ユーザー名/taskmanager.git
```

## 7. ファイルの作成（HTML/CSS/JS）
- `index.html`, `style.css`, `app.js` を作成（AIやエディタで雛形生成もOK）
- ファイルがプロジェクトフォルダに存在することを確認
- **ポイント:** ファイル名のスペルミスや拡張子ミスに注意！

## 8. 変更のステージングとコミット
- **ステージング(add)**: 変更を「次の記録対象」として選ぶ作業
- **コミット(commit)**: ステージした変更を「履歴」として記録
- **ポイント:** こまめなコミットで履歴が分かりやすくなります

```zsh
git add .
git commit -m "初回コミット: TaskManagerアプリの雛形作成"
```

## 9. GitHubへのプッシュ
- **プッシュ(push)**: ローカルの履歴をGitHubにアップロード
- **ポイント:** 初回は `git branch -M main` でmainブランチに統一

```zsh
git branch -M main
git push -u origin main
```

## 10. READMEの作成とアップロード
- **README.md**: プロジェクトの説明書。GitHubで最初に読まれる大事なファイル
- **ポイント:** 使い方・特徴・ライセンス・連絡先なども書くと親切

1. `README.md` を作成（アプリ概要・特徴・使い方・ファイル構成など記載）
2. アップロード：
```zsh
git add README.md
git commit -m "README.md追加"
git push
```

## 11. コードの変更と再プッシュ
- **ポイント:** 複数ファイルを一括でadd/commit/pushできる
- **コミットメッセージ**は「何を・なぜ」変更したか簡潔に

### 複数ファイルをまとめてコミット・プッシュしたい場合
- いくつかのファイルを同時に編集した場合、1つずつadd/commit/pushする必要はありません。
- すべての変更をまとめて以下のコマンドで一括反映できます。

```zsh
git add .
git commit -m "複数ファイルの変更をまとめてコミット"
git push
```

1. 例: `app.js` を編集し機能追加
2. 変更を保存後、
```zsh
git add app.js
git commit -m "app.js: タスク追加機能を実装"
git push
```

## 12. GitHubからのダウンロード・クローン・ファイル取得
- **clone**: リポジトリ全体を自分のPCにコピー
- **pull**: 既存リポジトリを最新状態に更新
- **個別ファイルDL**: Webから直接保存も可能

### リポジトリごとクローン
```zsh
git clone https://github.com/ユーザー名/taskmanager.git
```
### 既存リポジトリを最新化
```zsh
git pull origin main
```
### 個別ファイルだけダウンロード
1. GitHubで該当ファイルを開き「Raw」→右クリック「名前を付けて保存」

## 13. ブランチの作成・切り替え・マージ
- **ブランチ**: 新機能や修正を安全に試すための「作業用コピー」
- **ポイント:** main以外で作業→mainにマージが安全な流れ

- **新しいブランチ作成**
```zsh
git checkout -b feature/新機能名
```
- **ブランチ切り替え**
```zsh
git checkout main
```
- **mainへマージ**
```zsh
git checkout main
git merge feature/新機能名
```

## 14. 変更履歴の確認・過去バージョンへの戻し方
- **log**: 変更履歴の一覧
- **checkout**: 過去の状態に戻す
- **ポイント:** うっかりミスも履歴から復元できる

- **履歴一覧**
```zsh
git log --oneline
```
- **特定ファイルの履歴**
```zsh
git log ファイル名
```
- **過去の状態に戻す（例: 1つ前のコミット）**
```zsh
git checkout HEAD^ ファイル名
```

## 15. よくあるトラブルと対処法
- **エラー文はよく読む！** そのまま検索すると解決策が見つかることも多い
- **ポイント:** 何か困ったらまず `git status` で状況確認

- **push時にエラーが出る場合**
  - `git pull --rebase origin main` で最新を取得してから再度 `git push`
- **リモートURLを間違えた場合**
  - `git remote set-url origin 新しいURL` で修正
- **コミットメッセージを間違えた場合**
  - 直前なら `git commit --amend` で修正
- **ファイルを間違って消した場合**
  - `git checkout HEAD -- ファイル名` で復元

## 15.5. 特定ファイルをレポジトリから削除する方法（ベストプラクティス）
- **ポイント:** `git rm`で削除→commit→push。消しすぎたら`git checkout`で復元

- 不要になったファイルをGitHubリポジトリから削除したい場合は、以下の手順で安全に削除できます。

```zsh
git rm ファイル名
# 例: git rm old.txt

git commit -m "不要ファイル old.txt を削除"
git push
```
- `git rm` でワークツリーとステージから削除され、コミット＆プッシュでリモートからも消えます。
- **.gitignore**に追加すれば今後は追跡されません。
- うっかり消した場合は `git checkout HEAD -- ファイル名` で直前の状態に復元可能。

## 16. 便利Tips・用語集
- **.gitignore**: Git管理対象外にしたいファイル・フォルダを記載
- **差分確認**: `git status`, `git diff`
- **リモートリポジトリ一覧**: `git remote -v`
- **GitHub PagesでWeb公開**: 設定→Pages→mainブランチを選択
- **Pull Request（PR）**: 複数人開発時のレビュー・マージ申請機能
- **Fork**: 他人のリポジトリを自分のアカウントにコピー
- **Issue**: バグ報告やタスク管理用のチケット
- **参考:** [GitHub公式ドキュメント](https://docs.github.com/ja)

---

## GitHubの全体像と主な機能紹介（特にActions）

GitHubは単なる「ソースコードの置き場」ではありません。以下のような多彩な機能があり、個人開発からチーム・企業の本格運用まで幅広く活用されています。

### 代表的な機能一覧
- **リポジトリ（Repository）**: プロジェクトごとのファイル・履歴管理の単位
- **ブランチ/マージ**: 複数人・複数機能の同時開発を安全に実現
- **Pull Request（PR）**: コードレビューや共同作業のための申請・議論・マージ機能
- **Issue**: バグ報告・要望・タスク管理などのチケットシステム
- **Wiki**: プロジェクトごとのドキュメント管理
- **Projects**: カンバン方式のタスク管理ボード
- **GitHub Pages**: 静的Webサイトの無料ホスティング
- **Releases**: バージョンごとの配布物管理
- **Actions**: CI/CD（自動テスト・自動デプロイなど）をノーコードで実現できる自動化機能

### Actionsとは？
- **GitHub Actions**は、リポジトリ内の「.github/workflows」フォルダにYAMLファイルを置くだけで、
  - コードのpush/pull request時に自動でテスト・ビルド・デプロイ
  - Lintやフォーマットチェック、ドキュメント生成、Slack通知など
  - さまざまな自動化を「無料枠」で簡単に実現できます
- 公式・コミュニティ製の「Action（部品）」を組み合わせて、複雑なワークフローもノーコードで構築可能
- 例: Node.jsアプリの自動テスト
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```
- 詳細は[GitHub Actions公式ドキュメント](https://docs.github.com/ja/actions)を参照

### その他の便利機能
- **Codespaces**: ブラウザ上でVS Code環境を即座に起動し、どこでも開発可能
- **Dependabot**: 依存パッケージの脆弱性自動検知・アップデート提案
- **Security/Insights**: セキュリティ診断やコントリビューション分析
- **Marketplace**: 便利なActionやアプリを検索・導入

---

GitHubは「コード管理」だけでなく、開発・運用・コラボレーション・自動化まで一気通貫でサポートする強力なプラットフォームです。興味が湧いた機能から少しずつ触れてみましょう！

---

このチュートリアルに沿って進めれば、GitHubの基本から実践まで一通り体験できます。困ったときはAI（GitHub Copilot）や公式ドキュメントも活用しましょう！

---

## 18. GitHub Actionsハンズオン：Habit Trackerアプリで学ぶCI/CD入門

このセクションでは、実際に作成したHabit Trackerアプリを使って、GitHub Actionsの基本を学びます。各手順で作業する場所（ローカルPCまたはGitHub）を明確に示しています。

### 18.1 GitHub Actionsの基本設定

【ローカルでの作業】
1. ターミナルで、リポジトリのルートディレクトリに移動:
```zsh
cd ~/projects/github/habits
```

2. Actionsの設定ファイル用のディレクトリを作成:
```zsh
mkdir -p .github/workflows
```

3. 最初のワークフローファイルを作成:
```zsh
touch .github/workflows/validation.yml
```

4. お好みのエディタで`validation.yml`を開き、以下の内容を記述:
```yaml
name: Code Validation

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Validate HTML
      run: |
        npx html-validator-cli ./index.html
        
    - name: Validate CSS
      run: |
        npx stylelint "**/*.css"
        
    - name: Validate JavaScript
      run: |
        npx eslint "**/*.js"
```

5. Node.js関連ファイルの準備:
```zsh
# package.jsonの作成
npm init -y

# 検証ツールのインストール
npm install --save-dev html-validator-cli stylelint eslint
```

6. 変更をGitHubにプッシュ:
```zsh
git add .github/workflows/validation.yml package.json package-lock.json
git commit -m "GitHub Actions: バリデーション設定を追加"
git push
```

【GitHub上での確認】
1. ブラウザでGitHubのリポジトリページを開く
2. 上部メニューの「Actions」タブをクリック
3. 先ほどプッシュした`validation.yml`のワークフローが実行されていることを確認

### 18.2 自動デプロイの設定（GitHub Pages）

【ローカルでの作業】
1. 新しいワークフローファイルを作成:
```zsh
touch .github/workflows/deploy.yml
```

2. `deploy.yml`に以下の内容を記述:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: .
```

3. 変更をGitHubにプッシュ:
```zsh
git add .github/workflows/deploy.yml
git commit -m "GitHub Actions: デプロイ設定を追加"
git push
```

【GitHub上での設定】
1. リポジトリのページで「Settings」タブをクリック
2. 左サイドメニューから「Pages」を選択
3. Source設定で「Deploy from a branch」を選択
4. Branch設定で「gh-pages」を選択し、保存

### 18.3 自動テストの追加

【ローカルでの作業】
1. テストディレクトリとファイルの作成:
```zsh
mkdir tests
touch tests/app.test.js
```

2. `tests/app.test.js`に以下のテストコードを記述:
```javascript
describe('Habit Tracker Tests', () => {
  test('localStorage is used', () => {
    expect(localStorage.getItem).toBeDefined();
  });
  
  test('habits array exists', () => {
    expect(habits).toBeDefined();
  });
});
```

3. `package.json`にJestの設定を追加:
```zsh
npm install --save-dev jest
```

4. `package.json`のscriptsセクションを編集:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

5. テスト用のワークフローファイルを作成:
```zsh
touch .github/workflows/test.yml
```

6. `test.yml`に以下の内容を記述:
```yaml
name: Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Run tests
      run: npm test
```

7. すべての変更をGitHubにプッシュ:
```zsh
git add .
git commit -m "GitHub Actions: テスト設定を追加"
git push
```

【GitHub上での確認】
1. 「Actions」タブで新しく追加したワークフローの実行状況を確認
2. テスト結果のログを確認（成功：緑のチェック、失敗：赤のバツ）

### 18.4 動作確認とトラブルシューティング

【GitHub上での確認】
1. リポジトリページの「Actions」タブで各ワークフローの状態を確認:
   - ✅ 緑のチェック → 正常に完了
   - ⌛ 黄色の円 → 実行中
   - ❌ 赤のバツ → エラーが発生

2. エラーが発生した場合:
   - ワークフロー名をクリック
   - 失敗したジョブをクリック
   - 赤バツのステップを展開してログを確認
   - エラーメッセージを基に問題を特定

【ローカルでの対応】
- エラーの種類に応じて以下を確認:
  1. 構文エラー → YAMLファイルのインデントを確認
  2. 依存関係エラー → `package.json`の内容とインストールを確認
  3. テスト失敗 → テストコードとアプリコードを確認

### 18.5 応用：追加の自動化設定

【ローカルでの作業】
1. 依存関係の自動更新設定を追加:
```zsh
mkdir -p .github
touch .github/dependabot.yml
```

2. `dependabot.yml`に以下を記述:
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
```

3. プルリクエスト時の自動レビュー設定:
```zsh
touch .github/workflows/review.yml
```

4. `review.yml`に以下を記述:
```yaml
name: Code Review

on:
  pull_request:
    branches: [ main ]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Code Review
      uses: reviewdog/action-eslint@v1
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        reporter: github-pr-review
```

5. 変更をプッシュ:
```zsh
git add .github/dependabot.yml .github/workflows/review.yml
git commit -m "GitHub Actions: 追加の自動化設定を追加"
git push
```

【GitHub上での確認】
1. 「Security」タブでDependabotの設定を確認
2. プルリクエストを作成して自動レビューの動作を確認

### 18.6 セキュリティとベストプラクティス

【GitHub上での設定】
1. シークレットの管理:
   - リポジトリの「Settings」→「Secrets and variables」→「Actions」
   - 「New repository secret」でシークレットを追加

【ベストプラクティス】
- ワークフローファイルは段階的に追加
- 各ステップでの動作確認を忘れずに
- エラー時はログを詳しく確認
- 機密情報は必ずシークレットとして管理

---

**学習のポイント**: 
- 基本的な流れは「ローカルで設定ファイル作成→GitHubにプッシュ→GitHub上で動作確認」
- エラーが出ても慌てず、ログをよく読んで対処
- Actions Marketplaceで公開されている便利なアクションも活用しましょう
