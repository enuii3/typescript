# typescript

npm install --save-dev typescript
TypeScriptは開発環境のみ使用したいので--save-devオプションを追加する

.node_modules/.bin/tsc src/install-typescript.ts
tscコマンドは　TypeScriptで書かれたコードをJavaScriptに変換する

tscはnode_modulesパッケージの配下にある(node_modules/.bin/tsc)                                                                                                           

npxコマンドはnode_models配下を探索して実行してくれるコマンド

ts-nodeはTypeScriptで書かれたコードをJavaScriptにコンパイルした後にnodeで実行までしてくれるパッケージ

npx ts-node-dev --respawn src/install-typescript.ts
--respawnオプションをつけることによって変更を検知して、コンパイルして実行してくれる
