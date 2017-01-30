/**
 * Field
 * 蟻が歩き回るフィールドのモデル
 * 二次元の座標情報を持つ。管理する情報は「色」
 * true：「白」、false：「黒」
 * @param int rows    このフィールドの縦幅サイズ
 * @param int columns このフィールドの横幅サイズ
 * @author  T.Kitajima
 * @version 0.9
 */
function Field(rows, columns) {

    /**
     * 二次元の座標情報。管理する情報は「色」。
     * true：「白」、false：「黒」
     */
    this.grid = new Array();

    for(i=0; i<rows; i++){
        this.grid[i] = new Array();
        for(j=0; j<columns ;j++){
            this.grid[i][j] = false;
        }
    }
};


Field.prototype = {

    /**
    * 指定された座標の色を返す
    * @param int x 調べたいポイントのx座標
    * @param int y 調べたいポイントのy座標
    * @return bool 指定座標の色が白ならtrue、黒ならfalse
    */
    getColor : function(x, y) {
        return this.grid[x][y];
    },


    /**
    * 指定された座標の色を反転する
    * @param int x 反転させたいポイントのx座標
    * @param int y 反転させたいポイントのy座標
    */
    turnOver : function(x, y) {
        this.grid[x][y] = !this.grid[x][y];

        // このタイミングで、Drawerオブジェクトを使ってスクリーンに変化を反映させる
        drawer.draw(x, y, this.grid[x][y]);
    },


    /**
    * このフィールドの「縦幅」サイズを返す
    * @return int 縦幅
    */
    _countRows : function() {
        return this.grid[0].length;
    },


    /**
    * このフィールドの「横幅」サイズを返す
    * @return int 横幅
    */
    _countColumns : function() {
        return this.grid.length;
    },


    /**
    * 指定された方向に一歩進んだ時のx,y座標を返す
    * @param int x 現在地のx座標
    * @param int y 現在地のy座標
    * @param DIRECTION direction 進む方向。enum"DIRECTION"で定義
    * @see DIRECTION
    * @return int[x,y] 一歩進んだ先のx,y座標。配列。1番目の要素がx座標、2番目の要素がy座標
    */
    getDestinationPoint : function(x, y, direction) {
        var destination = [x, y];
        switch (direction){
            case DIRECTION.NORTH:
                destination[1] = y<=0 ? this._countRows()-1 : y-1;
                break;
            case DIRECTION.EAST:
                destination[0] = x>=this._countColumns()-1 ? 0 : x+1;
                break;
            case DIRECTION.SOUTH:
                destination[1] = y>=this._countRows()-1 ? 0 : y+1;
                break;
            case DIRECTION.WEST:
                destination[0] = x<=0 ? this._countColumns()-1 : x-1;
                break;
        }
        return destination;
    }
};
