<template>
  <div class="piece">
    <span class="position">{{ position }}</span>
    <v-img
      v-if="isPiece"
      :src="imgSrc"
      :class="pieceClass"
    ></v-img>
  </div>
</template>

<script>
// plugins
import Rules from '@/plugins/rules'

export default {
  name: 'Piece',
  components: {},
  props: {
    piece: {
      type: Number || String,
      default: ""
    },
    position: {
      type: Number,
      default: 0
    },
    isSente: {
      type: Boolean,
      default: false
    },
    isOwn: {
      type: Boolean,
      default: false
    },
    isNari: {
      type: Boolean,
      default: false
    },
    isHold: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
    }
  },
  computed: {
    isPiece() {
      return this.piece > Rules.EMPTY
    },
    imgSrc() {
      let pieceImg = ""
      // 駒画像を取得
      switch( this.piece ) {
        case Rules.OU:
          pieceImg = this.isSente ? 'piece/7_1.png' : 'piece/7_2.png'
          break

        default:
          pieceImg = `piece/${this.piece}.png`
          break
      }
      return require(`@/assets/imgs/${pieceImg}`)
    },
    pieceClass() {
      return {
        isOwn: this.isOwn,
        isEnemy: !this.isOwn
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.piece {
  position: relative;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  .position{
    color: #bbb;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
  }
  .isOwn{
    filter: drop-shadow(4px 4px 2px #aaa);
  }
  .isEnemy{
    transform: rotate(180deg);
    filter: drop-shadow(-4px -3px 2px #aaa);
  }
}
</style>