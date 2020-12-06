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
document.getElementById('os2').addEventListener('change',function(){
    console.log(getListbox('os2'));
},false);

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

//⑥の値を取得
let fl = document.getElementById('file1');
//選択されたファイルの情報をログに表示
document.getElementById('file1').addEventListener('change',function(e){
    for(let i = 0; i < fl.files.length; i++){
        let input = fl.files[i];
        console.log('ファイル名:' + input.name);
        console.log('種類:' + input.type);
        console.log('サイズ:' + input.size / 1024 + 'KB');
        console.log('最終更新日時：' + new Date(input.lastModifieds));
    }
},false);

//Fileオブジェクトの種類
/**
 * name ファイル名
 * type コンテンツタイプ
 * size サイズ
 * lastModified 最終更新日
 * 
 */

//⑦の値を習得
let textFile = document.getElementById("file2");
let result1 = document.getElementById("result1");
let reader1 = new FileReader();

//ロード時にその読み取り結果をページに反映
reader1.addEventListener("load",function(){
    //resultプロパティでファイル内容にアクセスする
    result1.innerHTML = reader1.result.replace(/(\n|\r)/g,"<br/>");
},false);

//読み取りに失敗した場合はエラーメッセージを表示
reader1.addEventListener("error",function(){
    //error.messageプロパティでエラーメッセージを取得
    console.log("エラー発生:" + reader1.error.message);
},false);

//ボタンをクリックしたタイミングで、ファイルの内容を表示
document.getElementById("btn2").addEventListener("click",function(e){
    //ファイルの内容をテキストとして読み込む
    reader1.readAsText(textFile.files[0],"UTF-8");
},false);

/**
 * FileReaderのイベント
 * loadstart 読み込みを開始したとき
 * loadend　読み込みを終了したとき
 * abort 読み込みが中断されたとき
 * progress Blobコンテンツの読み込み時
 */

 //⑧の値を取得
let binallyFile = document.getElementById("file3");
let reader2 = new FileReader();

//ロード時にその読み取り結果をページ反映
reader2.addEventListener("load",function(e){
    document.getElementById("result2").src = reader2.result;
},false);

//ファイルを選択したタイミングで内容を表示
binallyFile.addEventListener("change",function(e){
    //先頭のファイルだけを認識
    let input = binallyFile.files[0];
    //ファイルをバイナリ(Data URL形式) で読み込み
    reader2.readAsDataURL(input);

},false);

//⑨を実行
let result3 = document.getElementById("result3");
let upfile = document.getElementById("upfile");

//ファイル選択時にアップロードを実行
upfile.addEventListener("change",function(){
    //先頭のファイルだけを認識
    let f = update.files[0];
    //アップロードファイルを準備
    let data = new FormData();
    data.append("upfile",f,f.name);

    //サーバーにデータを送信
    fetch('upload.php',{
        method: 'POST',
        body: data,
    })
    //成功時にはアップロードしたファイル名を表示
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        result.textContent = text;
    });
},false);