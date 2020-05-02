import Rules from '@/plugins/rules'

class Game{
  constructor(sente, gote, isPlayerSente, time){
    this.sente = sente
    this.gote = gote
    this.isPlayerSente = isPlayerSente
    this.time = time
  }
}
  
export default Game