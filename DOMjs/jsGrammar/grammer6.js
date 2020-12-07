
//class クラス名
class Article{

    //コンストラクタ※一クラスにつき一つしか定義できない
    //constructorで固定
    // constructor(title,url,intro){
    //     //プロパティthis.property = value 
    //     this.title = title;
    //     this.url = url;
    //     this.intro = intro;
    // }

    //コンストラクタの省略形
    constructor(title,url,intro){
        Object.assign({title,url,intro});
    }

    //メソッドの定義
    //オブジェクトを文字列化するメソッド
    toString(){
        return `${this.title}(${this.url}):${this.intro}`
    }

    //this._property～プライベート変数う
    /**
     * get プロパティ名(){}
     * 
     * set プロパティ名(value){}
     */
    get title(){
        return this._title;
    }

    //セッター
    set title(value){
        this._title = value;
    }

    //クラス定数
    static get PI(){
        return 3.14;
    }

    //静的メソッド
    static getCircleArea(radius){
        return radius * radius * Article.PI;
    }

}

//インスタンス化
let article = new Article(
    "PHP",
    "https://document.jp/index.html",
    "初心者でも優しく"
);

//プロパティにアクセス
console.log(article.url);

//メソッドを実行
console.log(article.toString);

//ゲッターからアクセス
console.log(article.title);

//静的メソッド
console.log(Article.getCircleArea(3));

//クラスぬ