# TypeScript

```
npm install --save-dev typescript
```
TypeScriptは開発環境のみ使用したいので--save-devオプションを追加する


```
.node_modules/.bin/tsc src/install-typescript.ts
```
tscコマンドは　TypeScriptで書かれたコードをJavaScriptに変換する
- tscはnode_modulesパッケージの配下にある(node_modules/.bin/tsc)                                                                                                           
- npxコマンドはnode_models配下を探索して実行してくれるコマンド
- ts-nodeはTypeScriptで書かれたコードをJavaScriptにコンパイルした後にnodeで実行までしてくれるパッケージ

```
npx ts-node-dev --respawn src/install-typescript.ts
```
--respawnオプションをつけることによって変更を検知して、コンパイルして実行してくれる

- 通常JavaScriptではモジュールを導入していない場合、変数を定義するとグローバル空間に定義される。
- exportをしていないとモジュールとして扱われない

- 配列の制約（ex 要素の順序など）を強めたい場合にtuple型を使用する
- tuple型は型推論では表示されない

- any型は型を不定な場合に使用する
- void型は呼び元には返りますが、returnされる値がない場合
- never型は呼び元に返ってもこない
- unknown型はタイプガードとして使う（any型を使わずにtypeofとの併用）
- 
