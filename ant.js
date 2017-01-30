/**
 * Ant
 * 蟻のモデル
 * @param int x フィールド上の蟻のx座標（初期値）
 * @param int y フィールド上の蟻のy座標（初期値）
 * @param DIRECTION direction 蟻が向いている方向（初期値）。enum"DIRECTION"で定義
 * @see DIRECTION
 * @author  T.Kitajima
 * @version 0.9
 */
function Ant(x, y, direction) {

    this.x = x;
    this.y = y;
    this.direction = direction;
}


Ant.prototype = {

    /**
    * 一歩前進し、規定の動作（左右回転とフィールドの色反転）を行う。
    * @param Field field フィールドオブジェクト
    */
    goAhead : function(field) {

        // 現在地のフィールドの色を反転する
        field.turnOver(this.x, this.y);

        // 移動先座標を求め、一歩移動する
        var destination = field.getDestinationPoint(this.x, this.y, this.direction);
        this.x = destination[0];
        this.y = destination[1];

        // 移動先座標の色を調べる
        var color = field.getColor(this.x, this.y);
        
        // 黒(false)なら左回転、白(true)なら右回転
        if (color){
            this._turnRight();
        }else{
            this._turnLeft();
        }
    },


    /**
    * 右向け、右！
    */
    _turnRight : function() {
        // この計算式は、神しか知らないので邪道
        this.direction++;
        if(this.direction>3) this.direction=0;
    },


    /**
    * 左向け、左！
    */
    _turnLeft : function() {
        // この計算式は、神しか知らないので邪道
        this.direction--;
        if(this.direction<0) this.direction=3;
    }
};
