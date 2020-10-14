//①値を習得
let name = document.querySelector('#name');
let profile = document.querySelector("#profile");
//ボタンをクリックしたらコンソールにテキスト内の値を表示
document.getElementById('btn1').addEventListener('click',function(){
    console.log(name.value);
    console.log(profile.value);
},false);

//②値を取得
let season = document.getElementById('season');
//選択ボックス変更時に、その値を取得
season.addEventListener('change',function(){
    console.log(season.value);
},false);

//③値を取得
let getRadioButton = function (name) {
    let result = "";
    //指定されたname属性のラジオボタンを取得
    let elems = document.getElementsByName(name);
    console.log(typeof elems);
    //ラジオボタンを順に操作し,選択状態にあるかどうかを判定
    for(let i = 0; i < elems.length; i++){
        if(elems[i].checked){
            result = elems[i].value;
        }
    }
    return result;
}

//[送信]ボタンクリックでラジオボタンの値を取得
document.getElementById('btn3').addEventListener('click',function(){
    console.log(getRadioButton('os'));
},false);

let mail = document.getElementById('mail');
//チェックボックス変更時に、その値に応じてログを表示
mail.addEventListener('change',function(){
    if(mail.checked){
        console.log(mail.value);
    }else{
        console.log("お知らせは,配信されません");
    }
},false);

//ラジオボタン/チェックボックス
let setRadioButton = function(name,value){
    let elems = document.getElementsByName(name);
    //ラジオボタンを操作し、該当する値(value属性)を持つものをチェック
    for(let i = 0; i < elems.length; i++){
        if(elems[i].value === value){
            elems.checked = true;
        }
    }
};
setRadioButton('os','mac');

