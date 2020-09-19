//html内のclass="title"で指定されたhtml要素を取得し定数titleに代入
const title = document.querySelector('.title');

function changeColor1(){
    //取得した要素のstyle属性の文字色(color)を赤('red')にする
    title.style.color = 'red';
    //習得した要素のstyle属性の背景色(background)を青(blue)にする
    //ケバブケースで書かれたプロパティはキャメルケースに書き換えないとエラーが発生する
    title.style.backgroundColor = 'blue'
}

title.addEventListener('click',changeColor1);

const title2 = document.querySelector('h2');

function changecolor2(){
    title2.style.color = 'green';
    title2.style.fontSize = '50px';
}
//マウスがtitle2=<h2>にホバーしたとき、changecolor2メソッドを実行する
title2.addEventListener('mouseenter',changecolor2);

//htmlのbutton要素を取得して定数btnに代入
const btn = document.querySelector('#btn');
const strings = document.querySelector('.str');
//ダイアログを表示する関数
function denger(){
    //'危険ですよ'という警告文を出す
    alert('危険ですよ');
    strings.style.color = "red";
}
//ボタン(button)がクリック(click)されたらdenger関数を実行する
btn.addEventListener('click',denger);



