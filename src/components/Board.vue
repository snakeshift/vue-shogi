<template>
  <div class="board">
    <template v-for="point in points">
      <Piece 
        v-if="Board[point]" 
        :key="point"
        :piece="Board[point].piece"
        :position="Board[point].position"
        :isSente="Board[point].isSente"
        :isOwn="Board[point].isOwn"
        :isNari="Board[point].isNari"
        :isHold="Board[point].isHold"
      />
    </template>
  </div>
</template>

<script>
// plugins
import Rules from '@/plugins/rules'

// components
import Piece from '@/components/Piece'

export default {
  name: 'Board',
  components: {
    Piece
  },
  props: {
    sfen: {
      type: String,
      default: ''
    },
    sente: {
      type: Object,
      default: () => {}
    },
    gote: {
      type: Object,
      default: () => {}
    },
    isPlayerSente: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      Board: ''
    }
  },
  methods: {
    // sfen文字列からboard配列を生成する
    changeSfenToBoard(sfen) {
      let board = {}

      // sfen構造を一度配列に加工
      let sfenArr = []
      sfen = sfen.split("/")
      for (let i = 0; i < sfen.length; i++) {
        sfenArr[i] = []
        let sfenStr = ""
        for (let j = 0; j < sfen[i].length; j++) {
          sfenStr += sfen[i][j]
          if (sfenStr === "+") {
            // skip
          } else if (!isNaN(sfenStr)) {
            // 数字の分だけ配列を作成し空埋め
            sfenArr[i].push(...Array(Number(sfenStr)).fill(''))
            sfenStr = ""
          } else {
            sfenArr[i].push(sfenStr)
            sfenStr = ""
          }
        }
      }

      // board配列を生成
      for (let i = 0; i < Rules.POINTS.length; i++) {
        for (let j = 0; j < Rules.POINTS[i].length; j++) {
          if (sfenArr[i][j]) {
            board[Rules.POINTS[i][j]] = this.createPiece(Rules.SFEN_TO_PIECE[sfenArr[i][j]], Rules.POINTS[i][j], Rules.SFEN_TO_IS_SENTE[sfenArr[i][j]], Rules.SFEN_TO_IS_OWN(this.isPlayerSente)[sfenArr[i][j]], Rules.SFEN_TO_IS_NARI[sfenArr[i][j]], false)
          } else {
            board[Rules.POINTS[i][j]] = this.createPiece(Rules.EMPTY, Rules.POINTS[i][j])
          }
        }
      }
      return board
    },
    createBoard() {
      this.Board = this.is_empty(this.sfen) ? this.changeSfenToBoard(Rules.INIT_BOARD) : this.changeSfenToBoard(this.sfen)
    },
    createPiece(pieceNumber, position, isSente = false,  isOwn = false, isNari = false, isHold = false) {
      let piece = {
        piece: pieceNumber,
        position: position, // 座標
        isSente: isSente, // 先手番の駒かどうか
        isOwn: isOwn, // 自駒かどうか
        isNari: isNari, // 成っているかどうか
        isHold: isHold // 持ち駒かどうか
      }
      return piece
    }
  },
  computed: {
    points() {
      let points = []
      Rules.POINTS.forEach(( point ) => { points.push( ...point ) })
      return points
    }
  },
  mounted() {
    this.createBoard()
  }
}
</script>

<style lang="scss" scoped>
.board {
  display: grid;
  grid-template-rows: 54.65px 54.65px 54.65px 54.65px 54.65px 54.65px 54.65px 54.65px 54.65px;
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
  border-left: 1px solid #333;
  border-top: 1px solid #333;
}
</style>