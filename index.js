function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let x = parseInt(firstNum); //10 
    let y = parseInt(secondNum); //12
    let distance = Math.abs(y - x); //2
    let difference = Math.abs(distance - blockRange); //10 
    if (distance > blockRange) { //2 > 12?
      return `${difference} blocks out of range`;}
      else 
      {return `within range by ${difference}`;}
  }
}
