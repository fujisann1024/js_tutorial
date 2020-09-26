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
function getSquareAre(width, height){
    return width * height;
}

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
 */
let getTryangleArea = function(width,height){
  return width * height / 2;};
console.log(getTryangleArea(2,3));
//アロー関数
/**
 * 
 */