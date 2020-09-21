//反復処理
/*
 * パターン1
 * while文
 * 初期化式
 * while(条件式){
 *  条件式がtrueの間繰り返す処理
 *　増減式
 * }
 * 
 * パターン2
 * do...while文
 * 初期化式
 * do{
 * 　条件式がtrueの間繰り返す処理
 * 　増減式
 * }while(条件式)
 * 
 * パターン3
 * for文(初期化式,条件式,増減式){
 *   条件式がtrueの間繰り返す処理
 * }
 */

//増減式～インクリメントとデクリメント
let i = 0
i = i + 1;
console.log(i);//1
//複合代入演算子の使用
i = 0;
i += 1;
console.log(i);//1
//インクリメント
i = 0;
i++
console.log(i);
//デクリメント
i = 0;
i--
console.log(i);
//while文とdo~while文の違い(基本は同じ)
let number = 10;

while(number <= 15){
    console.log(number + ", ");
    number++;
}//10,11,12,13,14,15

number = 10;

do{
    console.log(number + ", ");
    number--;
}while(number <= 5)
//10,
/*
do...while文の条件はfalseだが先にdo内の命令を実行してから
「"後"ろに"置"かれている」条件式で"判定"する->後置判定
while文、for文 「"前"に"置"かれている」条件式で"判定"する
->前置判定
*/
let sum = 0;

for(i = 1; sum <= 5; i++){
    console.log(sum + ",");
    sum = i;
}//0,1,2,3,4,5,

//特別なfor文
//オブジェクト(連想配列)のプロパティ(値)を順番に取り出し処理を行う
let country = {japan:"日本",　china:"中国", korea:"韓国"};
for(let eng_cou in country){
    console.log(`${eng_cou}の意味は${country[eng_cou]}です`);
}
/**
japanの意味は日本です
chinaの意味は中国です
koreaの意味は韓国です
 */

//配列などの内容を順番に取り出して処理を行う
let frameWork = ['Ruby_on_rails','Laravel','Django','Spring'];
for (let name of frameWork){
    console.log(`フレームワーク名:${name}`);
}
/**
 フレームワーク名:Ruby_on_rails
 フレームワーク名:Laravel
 フレームワーク名:Django
 フレームワーク名:Spring
 */

//ループを途中で中断/スキップしたい

let item = ['きゅうり','トマト','にんじん','青魚','ゴミ','お米'];

for(let i = 0; i < item.length; i++){
    if(item[i] === 'トマト') continue;
    if(item[i] === 'ゴミ') break;
    console.log(item[i]);
}
/**
きゅうり
にんじん
青魚
 */

 //複数の階層を脱出する
let num = 0;
nest:
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        if(num >= 20){
            break nest;
        }
        num = i * j;
        console.log(num + ",");
    }
}
/**
 * 1,2,3,4,5,
 * 2,4,6,8,10,
 * 3,6,9,12,15,
 * 4,8,12,15,20
 * break nestで5の段は計算されない
 */



