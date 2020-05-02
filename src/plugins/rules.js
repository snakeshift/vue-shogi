class Rules{
  static EMPTY = -1
  static HU = 0
  static KY = 1
  static KE = 2
  static GI = 3
  static KI = 4
  static KA = 5
  static HI = 6
  static OU = 7
  static NHU = 8
  static NKY = 9
  static NKE = 10
  static NGI = 11
  static NKA = 12
  static NHI = 13

  static SFEN_TO_PIECE = {
    P: Rules.HU, p: Rules.HU, '+P': Rules.NHU, '+p': Rules.NHU,
    L: Rules.KY, l: Rules.KY, '+L': Rules.NKY, '+l': Rules.NKY,
    N: Rules.KE, n: Rules.KE, '+N': Rules.NKE, '+n': Rules.NKE, 
    S: Rules.GI, s: Rules.GI, '+S': Rules.NGI, '+s': Rules.NGI,
    G: Rules.KI, g: Rules.KI,
    B: Rules.KA, b: Rules.KA, '+B': Rules.NKA, '+b': Rules.NKA,
    R: Rules.HI, r: Rules.HI, '+R': Rules.NHI, '+r': Rules.NHI,
    K: Rules.OU, k: Rules.OU
  }

  static SFEN_TO_IS_SENTE = {
    P: true, p: false, '+P': true, '+p': false,
    L: true, l: false, '+L': true, '+l': false,
    N: true, n: false, '+N': true, '+n': false, 
    S: true, s: false, '+S': true, '+s': false,
    G: true, g: false,
    B: true, b: false, '+B': true, '+b': false,
    R: true, r: false, '+R': true, '+r': false,
    K: true, k: false
  }

  static SFEN_TO_IS_NARI = {
    P: false, p: false, '+P': true, '+p': true,
    L: false, l: false, '+L': true, '+l': true,
    N: false, n: false, '+N': true, '+n': true, 
    S: false, s: false, '+S': true, '+s': true,
    G: false, g: false,
    B: false, b: false, '+B': true, '+b': true,
    R: false, r: false, '+R': true, '+r': true,
    K: false, k: false
  }

  static SFEN_TO_IS_OWN = (isPlayerSente) => {
    return {
      P: isPlayerSente, p: !isPlayerSente, '+P': isPlayerSente, '+p': !isPlayerSente,
      L: isPlayerSente, l: !isPlayerSente, '+L': isPlayerSente, '+l': !isPlayerSente,
      N: isPlayerSente, n: !isPlayerSente, '+N': isPlayerSente, '+n': !isPlayerSente, 
      S: isPlayerSente, s: !isPlayerSente, '+S': isPlayerSente, '+s': !isPlayerSente,
      G: isPlayerSente, g: !isPlayerSente,
      B: isPlayerSente, b: !isPlayerSente, '+B': isPlayerSente, '+b': !isPlayerSente,
      R: isPlayerSente, r: !isPlayerSente, '+R': isPlayerSente, '+r': !isPlayerSente,
      K: isPlayerSente, k: !isPlayerSente
    }
  }

  static POINTS = [
    [91,81,71,61,51,41,31,21,11],
    [92,82,72,62,52,42,32,22,12],
    [93,83,73,63,53,43,33,23,13],
    [94,84,74,64,54,44,34,24,14],
    [95,85,75,65,55,45,35,25,15],
    [96,86,76,66,56,46,36,26,16],
    [97,87,77,67,57,47,37,27,17],
    [98,88,78,68,58,48,38,28,18],
    [99,89,79,69,59,49,39,29,19]
  ]

  static KEEP_OUT = [
    0,1,2,3,4,5,6,7,8,9,10,
    20,30,40,50,60,70,80,90,100,
    101,102,103,104,105,106,107,108,109,110
  ]

  static INIT_BOARD = 'lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL'
}

export default Rules