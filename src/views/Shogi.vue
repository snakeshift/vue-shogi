<template>
  <div class="shogi">
    <Board 
      :sente="sente"
      :gote="gote"
      :isPlayerSente="isPlayerSente"
    />
  </div>
</template>

<script>
// plugins
import firebaseConfig from '@/plugins/firebase'

// components
import Board from '@/components/Board'

export default {
  name: 'Shogi',
  components: {
    Board
  },
  data () {
    return {
      userInfo: {},
      sente: {},
      gote: {},
      isPlayerSente: false,
      time: {}
    }
  },
  methods: {
    initGame(sente, gote, isPlayerSente, time) {
      this.sente = sente
      this.gote = gote
      this.isPlayerSente = isPlayerSente
      this.time = time
    }
  },
  async mounted () {
    this.userInfo = await firebaseConfig.signInAnonymously()
    const player1 = {
      name: "test_tarou"
    }
    const player2 = {
      name: "test_jirou"
    }
    const isPlayerSente = true
    const time = {
      sente: 1800,
      gote: 1800
    }
    this.initGame(player1, player2, isPlayerSente, time)
  }
}
</script>

<style lang="scss" scoped>
.shogi {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>