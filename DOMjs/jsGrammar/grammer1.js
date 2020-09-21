let data1 = "888abc";
//Number.parseInt(引数)～引数を整数値に変換
console.log(Number.parseInt(data1));//888
//Number.parseFloat(引数)～引数を浮動小数点数に変換
console.log(Number.parseFloat(data1));//888
//Number(引数)～引数を数値に変換
console.log(Number(data1));//NaN(非数値)
//typeof 変数名 ->　型を取得※動的型付けであるjavascriptにおいて型判定は重要
console.log(typeof data1);//string
//String(引数)～引数を文字列に変換
console.log(String(123));//"123"
//Boolean(引数)～引数を真偽値に変換
console.log(Boolean(0));//false

//算術演算子
let sum = 5 + 3;
console.log(sum);//8
let def = 5 - 3;
console.log(def);//2
let pro = 5 * 3;
console.log(pro);//15
let quo = 5 / 3;
console.log(quo);//1.6666666666666667
let rem = 5 % 3;
console.log(rem);//2
let pow = 5 ** 3;
console.log(pow);//125

pow = pow - 10;
console.log(pow);//115
//省略系->複合代入演算子
let x = 5;
x += 5;
console.log(x);
//他の演算子も同じ

//基本型と参照型の違い
//基本型~number(数値型),string(文字列型),boolean(真偽値)
//参照型~array(配列型),object(オブジェクト),function(関数型)

let i = 10;
//値渡し
let j = i;
i = 15;
console.log(j);

let m = ['赤','青','黄'];
//参照渡し
let n = m;
m[2] = '緑';
console.log(m);

//定数に値渡し、参照渡しをそれぞれやる
 const TAX =  1.08;
 //TAX = 1.1; エラー　Assignment to constant variable.

 let date = ['name','age','weight'];
 //date = ['red','blue','green']; Assignment to constant variable.
 date[0] = 'user';
 console.log(date);//(3) ["user", "age", "weight"]

//配列の内容を別々の変数に代入したい
//分割代入
let score = [25,36,95,152,99];
let [x0,x1,x2,x3,x4,x5] = score;
console.log(x0);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);//undefined(未定義)
let[a,b,c] = score;
console.log(a);
console.log(b);
console.log(c);

//...演算子の利用
let [num,...last] = score;
console.log(num);//25
console.log(last);//(4) [36, 95, 152, 99]

//変数のスワップ(入れ替え)
let white = '白';
let black = '黒';
[white,black] = [black,white];
console.log(white);//黒
console.log(black);//白

//オブジェクトの内容の分割代入(ES2015)
let member = {mid: 'tko', name1:'佐藤', age1:25};
let { name1, age1, birth} = member;

console.log(name1);
console.log(age1);
console.log(birth);//undefined

//名前が一致していればよいので並び順で1対1にしなくてもよい

//...演算子で残りの要素もまとめる(ES2018)
let {mid, ...other} = member;
console.log(mid);//tko
console.log(other);//{name1: "佐藤", age1: 25}

//変数に別名をつける
let {name1: author, age1: old} = member;
console.log(author);//佐藤
console.log(old);//25


