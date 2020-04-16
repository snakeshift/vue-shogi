<template>
  <div class="shogi">
    <Board
    
    />
  </div>
</template>

<script>
import firebaseConfig from '@/plugins/firebase'
import Board from '@/components/Board'

const board = {

}

export default {
  name: 'Shogi',
  data () {
    return {
        userInfo: ""
    }
  },
  components: {
    Board
  },
  async mounted () {
    this.userInfo = await firebaseConfig.signInAnonymously()
  }
}
</script>