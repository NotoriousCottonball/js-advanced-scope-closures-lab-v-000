function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let distance = Math.abs(parseInt(firstNum) - parseInt(secondNum));
    let difference = Math.abs(distance - blockRange); //10 
    if (distance > blockRange) { //2 > 12?
      return `${difference} blocks out of range`;}
      else 
      {return `within range by ${difference}`;}
  }
}
