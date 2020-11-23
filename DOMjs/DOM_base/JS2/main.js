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

//④値を取得
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
//引数 name:ラジオボタンの名前 ,value:設定値
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

//引数 name:チェックボックスの名前,value:設定値(配列)
let setCheckBox = function(name,value){
    let elmes = document.getElementsByName(name);
    //チェックボックスを走査し、該当する値を持つものをチェック
    for(let i = 0; i < elmes.length; i++){
        if(value.indexOf(elmes[i].value) > -1){
            elmes[i].checked = true;
        }
    }
};
setCheckBox('os',['windows','mac']);

let getListbox = function (name){
    //選択肢を格納するための配列を準備
    let result = [];
    //指定されたリストボックス配下の<option>要素を取得
    let elmes = document.getElementById(name).options;
    //<options>要素を順に走査し、選択状態にあるかを判定する
    for(let i = 0; i < elmes.lengthl; i++){
        if(elmes[i].selected){
            result.push(elmes[i].value);
        }
    }
    return result;
};

//リストボックス変更時に、その値を取得
document.getElementById('os').addEventListener('change',function(){
    console.log(getListbox('os'));
},false);

