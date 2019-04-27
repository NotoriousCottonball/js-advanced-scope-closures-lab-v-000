function produceDrivingRange(blockRange){
  return function(firstBlock, secondBlock){
    let distance = Math.abs(parseInt(firstNum) - parseInt(secondNum));
     if (distance <= blockRange) {
            return `within range by ${blockRange - distance}`;
     } else {
            return `${delta - blockRange} blocks out of range`;
     }
  }
}
