//Strictモード~安全性・効率性の観点から利用すべきでないものを
//エラーを表示させるモード
//'use strict';

//javascriptの標準出力 -> console.log();
//文字列はダブル(シングル)クォーテーションで囲む
console.log("hello world");//hello world
console.log('こんにちは');//こんにちは

//変数の宣言 -> let 変数名 
let name;
console.log(name);//undefined
//変数の代入※letを省略
name = "鈴木";
console.log(name);//鈴木
//変数の宣言と代入を同時に行う(初期化)
let age = 65;
console.log(age);//65
//変数の更新
age = 100;
console.log(age);//100

//定数の宣言　-> const 定数名
const user = "山田";
console.log(user);//山田

//定数宣言すると更新できない
//user = "田中"; Uncaught TypeError: Assignment to constant variable.

//"田中さん"こんにちはを出力
//console.log(""田中さん"こんにちは");->エラー

//エスケープシーケンス
console.log('"田中さん"こんにちは');//"田中さん"こんにちは

//"田中さん"は'ツチノコ'って見たことありますかを表示
//console.log('"田中さん"は'ツチノコ'って見たことありますか');
console.log('"田中さん"は\'ツチノコ\'って見たことありますか');//"田中さん"は'ツチノコ'って見たことありますか

//「\b」～バックススペース
console.log('私は\b人間です');
//「\n」～改行
console.log('私は\n人間です');
//「\\」～\(バックスラッシュ
console.log('私は\\人間です');

//複数行にまたがる文字列を表現したい
//テンプレート文字列「`string`」
const MESSAGE = `こんにちは
皆さん`;
console.log(MESSAGE);

//文字列に変数を埋め込む
const SPORTS = "サッカー";
console.log(`私の好きなスポーツは
${SPORTS}です`);

//配列 let 配列名 = [];
//配列の宣言
let data = [];
//配列の初期化["要素1","要素2"...];
let data2 = ["佐藤","鈴木","高橋"];
//配列の要素を指定 配列名[インデックス(添え字)]
console.log(data2[0]);//佐藤
console.log(data2[1]);//鈴木
console.log(data2[2]);//高橋

//配列のすべての要素を更新
data2 = ["山田","伊藤"];
console.log(data2[0]);//山田
console.log(data2[1]);//伊藤

//配列の特定の要素の更新
data2[1] = "渡辺";
console.log(data2[1]);

//入れ子の配列を生成
let data3 = [
    "日本",
    ["東京","大阪","愛知"],
    ["京都","横浜"]
];
console.log(data3[0]);//日本
console.log(data3[1][1]);//大阪
console.log(data3[2][1]);//横浜

//連想配列(オブジェクト)※javascriptではオブジェクトを連想配列として扱う
//連想配列の初期化
  //リテラル表現
const obj1 = {a:100,b:200,c:300};
  //Objectコンストラクター
const obj2 = new Object();
obj2.a = 100;
obj2.b = 200;
obj2.c = 300;
//要素の指定方法
  //ドット演算子
console.log(obj1.b);//200
  //ブラケット演算子
console.log(obj1['b']);//200