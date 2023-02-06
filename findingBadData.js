
function findingBadData(data){
  const Bad_Data = []

  for(let i = 0; i<data.length; i++){
    if(data[i]<0){
      Bad_Data.push(data[i]);
      
    }
  }
  const amountOfBadData = Bad_Data.length;
  return amountOfBadData;
}

const myData = findingBadData([ 1,2,5 ])
console.log(myData)