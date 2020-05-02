import Rules from '@/plugins/rules'

class Piece{
  constructor(piece, position, isSente = false,  isOwn = false, isNari = false, isHold = false){
    this.piece = piece // 駒番号
    this.position = position // 座標
    this.isSente = isSente // 先手番の駒かどうか
    this.isOwn = isOwn // 自駒かどうか
    this.isNari = isNari // 成っているかどうか
    this.isHold = isHold // 持ち駒かどうか
  }

  getMoveArea() {
    const Direction = []

    Direction[0]  =  10   //←
    Direction[1]  =  11   //←↓
    Direction[2]  =   1   //↓
    Direction[3]  =  -9   //→↓
    Direction[4]  = -10   //→
    Direction[5]  = -11   //→↑
    Direction[6]  =  -1   //↑
    Direction[7]  =   9   //←↑
    Direction[8]  = -12   //桂馬右飛び
    Direction[9]  =   8   //桂馬左飛び

    /* 歩香桂銀金角飛玉と杏圭全馬竜 (Direction順) */
    const CanGo = [
      [0,0,0,0,1,0,1,1,1,1,1,1,1,1],
      [0,0,0,1,0,1,0,1,0,0,0,0,1,1],
      [0,0,0,0,1,0,1,1,1,1,1,1,1,1],
      [0,0,0,1,0,1,0,1,0,0,0,0,1,1],
      [0,0,0,0,1,0,1,1,1,1,1,1,1,1],
      [0,0,0,1,1,1,0,1,1,1,1,1,1,1],
      [1,1,0,1,1,0,1,1,1,1,1,1,1,1],
      [0,0,0,1,1,1,0,1,1,1,1,1,1,1],
      [0,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,0,0,0,0,0]
    ]

    /* 歩香桂銀金角飛玉と杏圭全馬竜 (Direction順) */
    const CanJump = [
      [0,0,0,0,0,0,1,0,0,0,0,0,0,1],
      [0,0,0,0,0,1,0,0,0,0,0,0,1,0],
      [0,0,0,0,0,0,1,0,0,0,0,0,0,1],
      [0,0,0,0,0,1,0,0,0,0,0,0,1,0],
      [0,0,0,0,0,0,1,0,0,0,0,0,0,1],
      [0,0,0,0,0,1,0,0,0,0,0,0,1,0],
      [0,1,0,0,0,0,1,0,0,0,0,0,0,1],
      [0,0,0,0,0,1,0,0,0,0,0,0,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]

    // 後手だったらDirectionの中身に-1をかける 
    if (!this.isSente) {
      Direction.forEach(function(val, key){
        Direction[key] = val * -1
      })
    }

    // 移動可能範囲初期化
    let result = []

    // 移動先初期化
    let movePos = null

    // 自駒の移動可能範囲
    if (this.isOwn) {
      // 全移動方向に対して行けるか行けないか判断 
      for (let i = 0; i < Direction.length; i++) {
        console.log(Direction[i])
    //         // もしも[i]の方向に移動可能な駒であれば 
    //         if (CanGo[i][this.koma]) {
    //             // 移動先のマスを配列に追加 
    //             movePos = this.position + Direction[i];
    //             // ①移動先に自駒がない ②移動禁止エリアに入っていない
    //             if ((common.is_empty(board[movePos]) || (!common.is_empty(board[movePos]) && board[movePos].isOwn == false)) && global.rule.Guardian.indexOf(movePos) == -1) {
    //                 result.push(movePos);
    //                 // もしも[i]の方向にジャンプ可能な駒であれば
    //                 if (CanJump[i][this.koma]) {
    //                     for (var j = 1; j <= 8; j++) {
    //                         // ①移動先に駒があったら
    //                         if (!common.is_empty(board[movePos])) {
    //                             break;
    //                         }
    //                         var movePos = this.position + Direction[i];
    //                         movePos = movePos + Direction[i] * j;
    //                         // ①移動先に自駒がある ②移動禁止エリアに入っている
    //                         if((!common.is_empty(board[movePos]) && board[movePos].isOwn == true) || global.rule.Guardian.indexOf(movePos) != -1){
    //                             break;
    //                         }else{
    //                             result.push(movePos);
    //                             // ①移動先に駒があったら 
    //                             if (!common.is_empty(board[movePos])) {
    //                                 break;
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
      }
    }
  }
}

export default Piece