var CANVAS_WIDTH = 600;            // キャンバスのサイズ
var FPS = 100;                     // フレームレート
var canvas;                        // キャンバス
var context;                       // コンテキスト

var DIRECTION = {'NORTH':0, 'EAST':1, 'SOUTH':2, 'WEST':3};



var w = 450;
var h = 300;
var master;

window.onload = function() {

    master = new GameMaster();

    // フィールドを作る
    master.makeField(w, h);

    // 蟻、登場（何匹でも）
    for(i=0; i<4; i++){
        // 開始位置と向きは、ランダムに指定することにする
        x = Math.floor(Math.random()*w);
        y = Math.floor(Math.random()*h);
        d = Math.floor(Math.random()*4);
        master.putAnt(x, y, d);
    }

    // フィールドに砂を撒く（オプション）
    for(i=0; i<200; i++){
        x = Math.floor(Math.random()*w);
        y = Math.floor(Math.random()*h);
        master.sowTheSand(x, y);
    }

    // スタート
    master.gameStart();
};
