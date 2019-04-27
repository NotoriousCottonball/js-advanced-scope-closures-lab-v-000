function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let distance = Math.abs(parseInt(firstNum) - parseInt(secondNum));
    let delta = Math.abs(distance - blockRange); //10 
     if (delta <= blockRange) {
            return `within range by ${blockRange - delta}`
        } else {
            return `${delta - blockRange} blocks out of range`
        }
  }
}
