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
animals.unshift('うし');
console.log(animals);//(4) ["うし", "うさぎ", "コアラ", "ライオン"]

//配列に配列を結合したい
let fishs = [
    'マグロ','鯖','カツオ'
];

console.log(animals.concat(fishs));//(7) ["うし", "うさぎ", "コアラ", "ライオン", "マグロ", "鯖", "カツオ"]
console.log(animals);//(4) ["うし", "うさぎ", "コアラ", "ライオン"]
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
console.log(number.includes(500));//true

//配列の要素を一つの文字列として結合したい
//''だとそのまま連結して文字列で返す
//''だと,をつけて文字列で返す
console.log(animals.join(''));//うしうさぎコアラライオン
console.log(animals.join());//うし,うさぎ,コアラ,ライオン
console.log(typeof animals.join());//string

//配列から特定の要素を取り出したい
//第一引数～開始のインデックス番号
//第二引数～取り出す要素の個数
console.log(animals.slice(1,3));//(2) ["うさぎ", "コアラ"]

animalsX = ['a','b','c','d'];//(4) ["a", "b", "c", "d"]
//配列の内容を置き換えたい
console.log(animalsX);//
//splice(開始位置,要素数,[置換後の要素]);
console.log(animalsX.splice(2,2,'ねこ','いぬ'));//(2) ["c", "d"]
console.log(animalsX);//(4) ["a", "b", "ねこ", "いぬ"]
console.log(animalsX.splice(-4,2,'さる','とり'));// (2) ["a", "b"]
console.log(animalsX);//(4) ["さる", "とり", "ねこ", "いぬ"]

//配列内の要素を特定の値に設定したい
//fill(設定する値,開始位置(インデックス),終了位置(インデックス));
console.log(animalsX.fill('-',1,3));(4) ["さる", "-", "-", "いぬ"]

//配列の要素を並べ替えたい
let data3 = ['ぱんだ','うさぎ','コアラ'];
 //並び順を逆順にする
 data3.reverse();
 console.log(data3);

 //配列を任意のルールで並び替える
 let numberArray = [65,20,36,45,90];
 let sortArray = numberArray.sort();
 console.log(sortArray);

 let key = ['部長','課長','係長','主任'];

 //ソート対象のメンバーリスト
 let memberList = [
    {name: '山田',　position: '主任'},
    {name: '鈴木',　position: '部長'},
    {name: '田中',　position: '課長'},
    {name: '佐藤',　position: '課長'},
 ];

 //役割(position)の、配列keyにおける位置の大小で比較

console.log(memberList.sort(function(m,n){
    return key.indexOf(m.position) - key.indexOf(n.position);
 })); 
 /**
  * (4) [{…}, {…}, {…}, {…}]
0: {name: "鈴木", position: "部長"}
1: {name: "田中", position: "課長"}
2: {name: "佐藤", position: "課長"}
3: {name: "山田", position: "主任"}
length: 4
  */
     
//配列内の要素を別の位置に移動したい
//copyWithin(移動先,コピー開始位置,コピー終了位置);

let music = ['ド','レ','ミ','ファ','ソ'];
music.copyWithin(1,2,3);
console.log(music);

//配列を複製したい
let zoo = ['キリン','ゾウ','ライオン'];
let copy = Array.from(zoo);
console.log(zoo);//(3) ["キリン", "ゾウ", "ライオン"]
console.log(copy);//(3) ["キリン", "ゾウ", "ライオン"]
//ただし
console.log(zoo === copy);//false=>シャローコピー
//シャローコピーとは
zoo[0] = 'パンダ';

console.log(zoo);//(3) ["パンダ", "ゾウ", "ライオン"]
console.log(copy);//(3) ["キリン", "ゾウ", "ライオン"]

//配列の内容を順に処理したい
//forEach(function(要素値,インデックス値,配列){処理},thisがあらわす値)
//コールバックの引数は省略可能
let dogs = [
    {name:'フレンチドック', type:'いぬ'},
    {name:'ヨークシャーテリア', type:'いぬ'},
    {name:'ダックスフンド', type:'いぬ'},
    {name:'スコティッシュ', type:'ねこ'},
    {name:'ポメラニアン', type:'いぬ'},
];
//整形結果を格納するための配列
let result = [];
dogs.forEach(function (value){
    this.push(value.name + ':' + value.type);
},result);
console.log(result);
/*
["フレンチドック:いぬ", 
 "ヨークシャーテリア:いぬ",
 "ダックスフンド:いぬ", 
 "スコティッシュ:ねこ", 
 "ポメラニアン:いぬ"]
*/
/**
 * 配列の要素を順番に加工したい
 * map(function(要素値,インデックス値,配列){処理},thisがあらわす値)
 */
let data4 = [1,2,3];
//個々の配列要素を2乗した配列を返す
let power = data4.map(function(value){
    return value * value;
});
console.log(power);//(3) [1, 4, 9]

/**
 * 配列の内容を特定の条件で絞り込みたい
 *  filter(function(要素値,インデックス値,配列){処理},thisがあらわす値)
 */
let dogs2 = [
    'フレンチブルドッグ',
    'ヨークシャーテリア',
    'ダックスフンド',
    'ポメラニアン',
    'コーギー',
];
//文字列長が8文字未満の要素だけを残すコード
let short = dogs2.filter(function(value){
    return (value.length < 8);
});
console.log(short);//(3) ["ダックスフンド", "ポメラニアン", "コーギー"]

/**
 * 配列の要素がすべて与えられた条件に合致するかを判定したい
 * every(function(要素値,インデックス値,配列){処理},thisがあらわす値)
 */
console.log(dogs2);//(5) ["フレンチブルドッグ", "ヨークシャーテリア", "ダックスフンド", "ポメラニアン", "コーギー"]

console.log(dogs2.every(function(value){
    return (value.length < 8);//false
}));

/**
 * 配列の要素が一つでも与えられた条件に合致するかを判定したい
 * some(function(要素値,インデックス値,配列){処理},thisがあらわす値)
 */

console.log(dogs2.some(function(value){
    return (value.length < 8);//true
}));