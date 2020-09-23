//配列
//データ構造
//スタック(LIFO~Last In First Out=後入れ先出し)
let animals = [
    'ぱんだ','うさぎ','コアラ'
];

console.log(animals);//(3) ["ぱんだ", "うさぎ", "コアラ"]
//'ライオン'の値を後ろから入れる
animals.push('ライオン');
console.log(animals);//(4) ["ぱんだ", "うさぎ", "コアラ", "ライオン"]
//値を後ろから取り出す
animals.pop();
console.log(animals);// ["ぱんだ", "うさぎ", "コアラ"]

//キュー(FIFO~First In First Out=先入れ先出し)＝待ち行列
animals.push('ライオン');
console.log(animals);//(4) ["ぱんだ", "うさぎ", "コアラ", "ライオン"]
//値を前から取り出す
animals.shift();
console.log(animals);//(3) ["うさぎ", "コアラ", "ライオン"]

//値を前から入れる
animals.unshift('うさぎ');
console.log(animals);//(4) ["うさぎ", "うさぎ", "コアラ", "ライオン"]

//配列に配列を結合したい
let fishs = [
    'マグロ','鯖','カツオ'
];

console.log(animals.concat(fishs));//(7) ["うさぎ", "うさぎ", "コアラ", "ライオン", "マグロ", "鯖", "カツオ"]
console.log(animals);//(4) ["うさぎ", "うさぎ", "コアラ", "ライオン"]
//concat()は処理の結果を戻すだけで元の配列には影響を及ぼさない(値渡し),push,popなどは参照渡し

//オブジェクト(連想配列)を別のオブジェクトでマージ（上書き）したい
let data1 = {
    name:"kenji",
    age:25,
    tell:"025-4444-9999"
};

let data2 = {
    name:"kaori",
    age:20,
    tell:"066-8585-7878"
}
//Object.assign(target,source(コピー元)...);
Object.assign(data1,data2);
console.log(data1);//{name: "kaori", age: 20, tell: "066-8585-7878"}

//配列の結合みたいに結合したいし、元データに影響を与えたくない場合は
//一旦初期化
data1 = {
    name:"kenji",
    age:25,
    tell:"025-4444-9999"
};
data2 = {
    name:"kaori",
    age:20,
    tell:"066-8585-7878"
}
let merged = Object.assign({},data1,data2);

let number = [100,200,300,400,500,600,400];
//配列のサイズを習得する
console.log(number.length);//7
//配列の要素の位置を調べたい
//先頭から
console.log(number.indexOf(400));//3
//後ろから
console.log(number.lastIndexOf(400));//6
//※検索方向が変わるわけではない

//要素の有無を検索したい
number.includes(number);



