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
- intersection型は作成した型の再利用（複合）し作成する型
- union型はパイプ（｜）を用いて複数種の型を許容する型
- literal型は文字列や数値を決め打ち(union型を用いる)で許容出来る型
- enum型はenum型は列挙（index番号を付与する）
- constructorはインスタンスの生成時の初期化処理で型定義は書かない
- staticは静的メンバを使用する際に使用する(インスタンスの作成を省ける？)
- abstractは抽象メソッドと呼ばれ,必ずオーバーライド(継承)しないといけない
- TypeScriptの場合は多重継承（複数のクラスの継承）はできないが、interfaceの多重継承は可能
