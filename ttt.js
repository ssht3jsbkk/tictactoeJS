function ttt(x)  {
  if (x.length != 9){
    return 'the game is not finished yet'
  }
  if (x.length > 9){
    return ('too many moves')
  }
  for (i=0;i<x.length;i++){
    if (x[i] != 'x' || x[i] != 'o'){
      return ('invalid player')
    }
  }
  return ''
}

module.exports = ttt;
