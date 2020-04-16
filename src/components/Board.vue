<template>
  <div class="board">
    <div class="wrapper">
      <div class="point" v-for="point in points" :key="point">
        <span class="step">{{point}}</span>
        <span class="piece">{{board[point]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {Rules} from '@/plugins/library'

export default {
  name: 'Board',
  props: {
    boardInfo: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  computed: {
    board() {
      if (this.is_empty(this.boardInfo)) {
        return Rules.BOARD_INIT
      }
      return this.boardInfo
    },
    points() {
      return Rules.POINTS
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: grid;
    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
    border-left: 1px solid #333;
    border-top: 1px solid #333;
    .point {
      position: relative;
      border-right: 1px solid #333;
      border-bottom: 1px solid #333;
      .step {
        position: absolute;
        top: 2px;
        left: 2px;
        line-height: 1em;
        color: #ccc;
      }
      .piece {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>