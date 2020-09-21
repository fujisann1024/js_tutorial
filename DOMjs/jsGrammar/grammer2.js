//条件分岐
/**
 * パターン1
 * if(条件式){
 * 　　条件式がtrueの時の処理
 * }
 * 
 * パターン2
 * if(条件式){
 *    条件式がtrueの時の処理
 * }else{
 * 　　条件式がfalseの時の処理
 * }
 *
 * パターン3
 * if(条件式1){
 *      条件式1がtrueの時の処理
 * }else if(条件式2){
 *      条件式1がfalse、条件式2がtrueの時の処理
 * }...else if()は複数記述できる{
 * 
 * }else{
 *     条件式がすべてfalseの時の処理
 * }
 * 
 */

let score1 = 85;

//scoreが50以上の時
//比較演算子
/**
 *　a > b　a は b より大きい
 　 a >= b a は b 以上(同じか大きい)
    a < b  a は b より小さい
    a <= b a は b 以下
    a == b a と b　は等しい
    a === b a と b は等しくてデータ型が同じ
    a != b a と b は異なる値です
    a !== b a と b はデータ型と値が異なる
 */
if( score1 >= 50){
    console.log("合格");
}

//「==」と「===」の違い(!=と!==も同じ関係)
if(score1 == "85"){
    console.log("同じ値です");
}else{
    console.log("違う値です");
}
//同じ値です
//※「==」演算子はデータ型を変換してできるだけtrueにさせるようにする=>バグの原因
if(score1 === "85"){
    console.log("同じ値です");
}else{
    console.log("違う値です");
}
//違う値です

//①
//socre1が85ではないまたはscore1が100以下である場合 -> true
if(score1 !== 85){
    console.log("score1は85ではない");//false
}else if(score1 <= 100){
    console.log("score1は100点以下です");//true
}else{
    console.log("すべての条件にあてはまりません");//false
}

//ネスト（入れ子）
//②
//score1が0でないかつ、score1が50以上ならば　-> true
// それ以外　-> false
if(score1 !== 0){
    if(score1 >= 50){
        console.log("合格");
    }
}else{
    console.log("不合格");
}
//合格

//論理演算子
/*
    a && b ~ a かつ b
    a || b ~ a または b
    ! a ~ aがtrue(false)ならfalse(true)を出力
*/

//上の①、②を論理演算子で書き換える
if(score1 !== 85 || score1 <= 100){
    console.log("true");
}else{
    console.log("false");
}
//true
if(score1 !== 0 && score1 >= 50){
    console.log("true");
}else{
    console.log("false");
}
//true

let blood_type = "A";
if(blood_type === "A"){
    console.log("この人の血液型はA型です");
}else if(blood_type === "B"){
    console.log("この人の血液型はB型です");
}else if(blood_type === "O"){
    console.log("この人の血液型はO型です");
}else if(blood_type === "AB"){
    console.log("この人の血液型はAB型です");
}else{
    console.log("この人は人間ではありません");
}
//switch文
switch(blood_type){
    case "A"://式とcase 値は「===」で比較される
        console.log("この人の血液型はA型です");
        break;
    case "B":
        console.log("この人の血液型はB型です");
        break;
    case "O":
        console.log("この人の血液型はO型です");
        break;
    case "AB":
        console.log("この人の血液型はAB型です");
        break;
    default://省略はできるが書くべき
        console.log("この人は人間ではありません");
        break;
}

//breakがないと
/*
この人の血液型はA型です
grammer2.js:120 この人の血液型はA型です
grammer2.js:123 この人の血液型はB型です
grammer2.js:126 この人の血液型はO型です
grammer2.js:129 この人の血液型はAB型です
grammer2.js:132 この人は人間ではありません
*/