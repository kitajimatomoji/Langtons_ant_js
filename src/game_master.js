 /**
  * GameMaster
  * このゲームを管理、実行するWorker
  * @param Object objName setTimeoutを機能させるための便宜上のパラメータ。意識せずともよい
  * @author  T.Kitajima
  * @version 0.9
  */
function GameMaster(objName) {

    this.objName = objName;
    this.field = null;
    this.ants = new Array();
};


GameMaster.prototype = {

    /**
    * 指定された縦横サイズのフィールドを用意する
    * @param int w 作りたいフィールドの横幅
    * @param int h 作りたいフィールドの縦幅
    */
    makeField : function(w, h){
        this.field = new Field(w, h);
        drawer.initialize(w, h);
    },


    /**
    * フィールド上に砂を撒く。つまり、指定座標の白黒を入れ替える
    * @param int x 砂のx座標
    * @param int y 砂のy座標
    */
    sowTheSand : function(x, y) {
        this.field.turnOver(x, y);
    },


    /**
    * フィールド上に蟻を配置する。つまり、蟻を一匹生成する
    * @param int x フィールド上の蟻のx座標
    * @param int y フィールド上の蟻のy座標
    * @param DIRECTION direction 蟻が向いている方向。enum"DIRECTION"で定義
    * @see DIRECTION
    */
    putAnt : function(x, y, direction) {
        this.ants[this.ants.length] = new Ant(x, y, direction);
    },


    /**
    * ゲームスタート。蟻が前進するルーチンを繰り返し実行する
    */
    gameStart : function() {
        setTimeout(master._turn, 1000/FPS, this.objName);
    },


    /**
    * [private] 蟻が前進するルーチン
    */
    _turn : function(){
        for(i=0; i<master.ants.length; i++) {
            master.ants[i].goAhead(master.field);
        }
        setTimeout(master._turn, 1000/FPS, this.objName);
    }
};
