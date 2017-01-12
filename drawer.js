/**
 * <<interface>>
 * Drawer
 * [抽象クラス] 描画するためのオブジェクト
 * @author  T.Kitajima
 * @version 0.9
 */
function Drawer() {
};


Drawer.prototype = {

    /**
    * 描画領域を初期化する
    * @param int width  描画領域として確保したい横幅
    * @param int height 描画領域として確保したい縦幅
    */
    initialize : function(width, height) {
        console.log("function initialize is not defined!");
    },

    /**
    * 指定された座標に着色する
    * @param int x 着色したいポイントのx座標
    * @param int y 着色したいポイントのy座標
    * @param int isWhite 白ならtrue、黒ならfalse
    */
    draw : function(x, y, isWhite){
        console.log("function draw is not defined!");
    }
};



/**
 * CanvasDrawer
 * HTML canvas に描画するためのオブジェクト
 * id="field" というcanvasに描画する
 * @author  T.Kitajima
 * @version 0.9
 */
function CanvasDrawer(){
  Drawer.apply(this,arguments);
}
CanvasDrawer.prototype = Object.create(Drawer.prototype);


CanvasDrawer.prototype = {

    /**
     * ${inheritDoc}
     */
    initialize : function(width, height) {

        // id="field" というcanvasに描画する、という仕様とする
        canvas = document.getElementById('field');
        canvas.width  = width;
        canvas.height = height;
        canvas.style.margin = '50px';
        canvas.style.height = (CANVAS_WIDTH * height / width) + 'px'; // 画面引き伸ばし
        canvas.style.width  = CANVAS_WIDTH + 'px';
        //canvas.style.border = '1px solid #eeeeee';

        context = canvas.getContext('2d');
        context.fillStyle = 'rgb(44, 44, 44)';
        context.fillRect(0, 0, width, height);
    },

    /**
     * ${inheritDoc}
     */
    draw : function(x, y, isWhite){
        var rgb = isWhite ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
        context.fillStyle = rgb;
        context.fillRect(x, y, 1, 1);
    }
};

// HTML canvas に描画するオブジェクトを選択する
var drawer = new CanvasDrawer();
