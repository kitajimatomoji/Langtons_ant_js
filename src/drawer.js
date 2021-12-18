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
 * HTMLCanvasDrawer
 * HTML canvas に描画するためのオブジェクト
 * id="field" というdiv にcanvasを生成して描画する
 * @author  T.Kitajima
 * @version 0.9
 */
function HTMLCanvasDrawer(){
  Drawer.apply(this,arguments);
}
HTMLCanvasDrawer.prototype = Object.create(Drawer.prototype);


HTMLCanvasDrawer.prototype = {

    /**
     * ${inheritDoc}
     */
    initialize : function(width, height) {

        let field = document.getElementById('field');
        let canvas = document.createElement("canvas")
        field.appendChild(canvas);
        canvas.width  = width;
        canvas.height = height;
        canvas.style.margin = '50px';
        canvas.style.height = (CANVAS_WIDTH * height / width) + 'px'; // 画面引き伸ばし
        canvas.style.width  = CANVAS_WIDTH + 'px';
        //canvas.style.border = '1px solid #eeeeee';

        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'rgb(44, 44, 44)';
        this.context.fillRect(0, 0, width, height);
    },

    /**
     * ${inheritDoc}
     */
    draw : function(x, y, isWhite){
        let rgb = isWhite ? 'rgb(255, 255, 255)' : 'rgb(44, 44, 44)';
        this.context.fillStyle = rgb;
        this.context.fillRect(x, y, 1, 1);
    }
};



/**
 * HTMLTableDrawer
 * HTML table に描画するためのオブジェクト
 * id="field" というdiv に table を生成して描画する
 * @author  T.Kitajima
 * @version 0.9
 */
function HTMLTableDrawer(){
  Drawer.apply(this,arguments);
}
HTMLTableDrawer.prototype = Object.create(Drawer.prototype);


HTMLTableDrawer.prototype = {

    /**
     * ${inheritDoc}
     */
    initialize : function(width, height) {

        let field = document.getElementById('field');
        let table = document.createElement("table")
        field.appendChild(table);
        table.width  = width;
        table.height = height;
        table.style.margin = '50px';
        table.style.borderCollapse = 'collapse';
        table.style.border = 'solid 1px';
        table.style.height = (CANVAS_WIDTH * height / width) + 'px'; // 画面引き伸ばし
        table.style.width  = CANVAS_WIDTH + 'px';
        //canvas.style.border = '1px solid #eeeeee';

        for(row=0; row<height; row++){
            let tr = document.createElement("tr");
            table.appendChild(tr);
            for(column=0; column<width; column++){
                let td = document.createElement("td");
                td.id = row + '_' + column;
                td.style.height = '1px'; // 画面引き伸ばし
                td.style.width  = '1px';
                td.style.border  = 'solid 1px';
                td.style.borderColor  = 'rgb(0, 0, 0)';
                td.style.backgroundColor = 'rgb(44, 44, 44)';
                tr.appendChild(td);
            }
        }
    },

    /**
     * ${inheritDoc}
     */
    draw : function(x, y, isWhite){
        let rgb = isWhite ? 'rgb(255, 255, 255)' : 'rgb(44, 44, 44)';
        let td = document.getElementById(x + '_' + y);
        td.style.backgroundColor = rgb;
    }
};

// 描画するオブジェクトを選択する
var drawer = new HTMLCanvasDrawer();
//var drawer = new HTMLTableDrawer();
