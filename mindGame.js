function mindGame(positiveNumber){
  if(positiveNumber <= 0){
    return "please give a positive number as parameter";
  }else if(Number.isInteger(positiveNumber) === false){
    return "input parameter must be number";
  }else{
    return (((positiveNumber * 3) + 10)/2)-5;
  }
}

const output = mindGame(-33)
console.log(output)