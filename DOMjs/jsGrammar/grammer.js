//Strictモード~安全性・効率性の観点から利用すべきでないものを
//エラーを表示させるモード
'use strict';

//javascriptの標準出力 -> console.log();
//文字列はダブル(シングル)クォーテーションで囲む
console.log("hello world");//hello world
console.log('こんにちは');//こんにちは

//変数の宣言 -> let 変数名 
let name;
//変数の代入※letを省略
name = "鈴木";
//変数の宣言と代入を同時に行う(初期化)
let age = 65;
//変数の更新
age = 100;

//定数の宣言
const user = "山田";

//定数宣言すると更新できない
//user = "田中"; Uncaught TypeError: Assignment to constant variable.

//"田中さん"こんにちはを出力
//console.log(""田中さん"こんにちは");->エラー

//エスケープシーケンス
console.log('"田中さん"こんにちは');//"田中さん"こんにちは

//"田中さん"は'ツチノコ'って見たことありますかを表示






