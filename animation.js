//イベントリスナーに直接,無名関数を書き込む
document.addEventListener('DOMContentLoaded',function(){
    //class = animate-titleで指定された
    const el = document.querySelector('.animate-title');
    //習得したHTML要素のタグで囲まれたテキスト内容の取得 . trim()~空白を取り除く . split()~配列に直す
    //const str = el.innerHTML.trim();
    
    //空文字で変数concatを初期化->ダぶりが生まれるため
    //let concatStr = '';
    
    // //strに格納された文字列を一つづつcに格納していく
    // for(let c of str){
    //     //半角スペース
    //     c = c.replace(' ', '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`
    // }
    
    //分割してspanタグで囲まれたHTMLをel.innerHTMLに代入
    // el.innerHTML = concatStr;

    //for文の代わりreduce関数を扱う
    const str = el.innerHTML.trim().split("");
                               //アロー関数(引数)=>{戻り値}
         el.innerHTML =  str.reduce(function (acc, curr) {
                 //cをcurrに置換
                 curr = curr.replace(' ', '&nbsp;');
                 return `${acc}<span class="char">${curr}</span>`;
                 //第二引数を空文字にすることでcurrのみに戻り値が格納される
             }, "");   
});