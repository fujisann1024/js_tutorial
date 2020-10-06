//ユーザー定義関数(4種類)
//function命令
/**
 * 宣言
 * function 関数名 (仮引数) {
 * 　　return 戻り値;
 * }
 * 実行
 * let 変数名　= 関数名(実引数);
 * console.log(変数名);
 */
function getSquareArea(width, height){
    return width * height;
}

let Area = getSquareArea(2,4);
console.log(Area);//8
//Functionコンストラクター※基本的には使わない
//外部から変数を読み込めてしまうため
/**
 * 宣言
 * let 関数名 = new Function ('仮変数','戻り値');
 * 
 */
let getSquareAre = new Function(
    'width','height','return width * height;'
);

//関数リテラル(無名関数)
/**
 * 宣言
 * let　関数名 = function(仮引数){ 
 * return 戻り値;};
 * 実行
 * console.log(関数名(実引数));
 */
let getTryangleArea = function(width,height){
  return width * height / 2;};
console.log(getTryangleArea(2,3));
//アロー関数
/**
 * let 関数名 = (仮引数) => {
 * return 戻り値;
 * };
 * 
 */
//台形の面積を求める関数
let Trapezoid = (top,bottom,height) => {
  return top * bottom * height / 2;
}
//省略形1(平行四辺形の面積を求める関数)=>処理が一個の場合は「｛｝」と「returnを省略する」
let parallelogram = (width, height) => width * height;

//省略形2(円の面積を求める関数)=>仮引数が一個の場合は「()」を省略できる
let getCircleArea = radius => radius * radius * Math.PI;

console.log(Trapezoid(2,4,5));//20
console.log(parallelogram(3,4));//12
console.log(getCircleArea(3));//28.274333882308138

//オブジェクトが戻り値のアロー関数の場合
let func = () => ({name: '山田太郎'});
console.log(func);//() => ({name: '山田太郎'})

//引数の既定値（デフォルト値）を設定したい
function setFullName(firstName = "山田", lastName = "太郎"){
    return firstName + lastName;
}

let fullName = setFullName();
console.log(fullName);//山田太郎
//既定値が適用されるのは引数が渡されなかった場合
let fullName1 = setFullName("鈴木",null);
console.log(fullName1);//鈴木null

let fullName2 = setFullName("佐藤",undefined);//undefindは値が渡されてないと同じ
console.log(fullName2);//佐藤太郎

//必須の引数を設定したい
// function required(msg){
//   throw new Error(msg)
// }

// function sum(
//   a = required('足される数が指定されていません'),
//   b = required('足す数が指定されていません')){
//     return a + b;
// }

// console.log(sum());
//grammer4.js:81 Uncaught Error: 足される数が指定されていません

//引数のオブジェクトから特定のプロパティだけを取り出したい
function print({title}){
  console.log(title);
}

let book = {
  title: '独習PHP',
  price: 3600,
  publsher: '翔泳社'
}

//宣言したときの仮引数をオブジェクトのキー情報であらかじめ指定
print(book);

//可変長引数~引数の個数があらかじめ決まってない関数
//例
Math.max(85,625,277,1204);//1204
Math.min(402,35,2,169,9);//2

/*
function 関数名　(...引数){
  処理
}

*/


//与えられた引数の総積を求める関数
function product(...nums){
  let result = 1;
  //可変長引数の内容を順に掛け合わせ
  for (let num of nums){
    result *= num;
  }
  return result;
}

console.log(product(2,3,4,5));

//※固定引数と可変長引数が混在している場合は可変長引数は引数リストの末端に置く]

//可変長引数に配列を渡したい=>「...」(スプレッド演算子)を利用する

console.log(product(...[3,4,5]));

//関数を引数として渡したい
function benchmark(proc){
  let start = new Date(); //開始時刻
  proc ();
  let end = new Date();//終了時刻
  return end.getTime()-start.getTime();//計測時間
}

//指定された匿名関数の処理時間を計測
//コールバック関数
console.log(
  benchmark(function(){
    let x = 15;
    for(let i = 0; i < 10000000; i++){
      x *= i;
    }
  })
);

//関数から複数の値を返したい
function getSumAverage(...values){
  let result = 0;
  //可変長引数の内容を順に足しこむ
  for(let value of values){
    result += value;
  }
  return [result, result/values.length];
}

let [sum, average] = getSumAverage(3,4,5,6);
//let [, average] = getSumAverage(3,4,5,6); 平均値だけが変数averageに代入され、合計値は省略される
console.log(sum);//18
console.log(average);//4.5

//ジェネレーター　
/**
 * function* range(start, end){
 *  yeild 処理;
 * }
 */

 

