  //id値をキーに要素を習得する
  let hello = document.getElementById('hello');
  console.log(hello);//<h1 id="hello">こんにちは</h1>
  //タグ名をキーに要素を習得する
  let comment = document.getElementsByTagName('h2');
  console.log(comment);//HTMLCollection(3) [h2, h2, h2]
  console.log(comment.length);//3
  console.log(comment.item(1));//<h2>みなさん</h2>
  console.log(comment.namedItem('s'));//<h2 id="s">元気ですか</h2>
  //input要素のラジオボタン/チェックボックスを取得する
  let season = document.getElementsByName('season');
  for(let i = 0; i < season.length; i++){
      console.log(season.item(i).value);//春 夏 秋 冬
  }
  //class属性をキーに要素を習得したい
  let key = document.getElementsByClassName('key');
  for(let i = 0; i < key.length; i++){
      console.log(key.item(i).textContent);//soccor baseball
  }

  //セレクター式で要素を検索したい～基本的に要素を取得するときはこいつを使う
  let h2 = document.querySelector('#s');
  console.log(h2);
　//要素の属性を設定したい
  let ank = document.querySelector('a');
  console.log(ank);
  ank.setAttribute('title','外部サイトに移動します');

  //要素の属性を習得したい
let ank1 = document.querySelector('div > .test1');
console.log(ank1.getAttribute('href'));//#
  //要素の属性を消去したい
let ank2 = document.querySelector('div > .test2');
ank2.removeAttribute('target');
console.log(ank2);//<a href="#" class="test2">リンク2</a>

//要素配下のテキストを設定したい
let good = document.querySelector('#good');
let bad = document.querySelector('#bad');
//HTMLとして解釈させて表示させたい場合
good.innerHTML = "<h1>ただいま</h1>";
//タグの中に表示させたい場合
bad.textContent = "<h1>ただいま</h1>";