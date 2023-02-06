// Problem 1: 

function mindGame(number){
return (((number * 3) + 10)/2)-5;
}

const output = mindGame(33)
console.log(output)



// Problem 2: 

function evenOdd(givenString){
  if(givenString.length % 2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
  }

  const evenAndodd = evenOdd('Phero')
  console.log(evenAndodd)


  // Problem 3:
  function isLGSeven(givenNumber){
    const result = givenNumber - 7;
    if(result < 7){
      return result;
    }else if(result>=7){
      return result * 2;
    }
  }
  const myReuslt  = isLGSeven(17)
  console.log(myReuslt)




  // Problem 4:
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

  // Problem 5:
  function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
    const firstFriendDiamond = firstFriendGems * 21;
    const secondFriendDiamond = secondFriendGems * 32;
    const thirdFriendDiamond = thirdFriendGems * 43;
    
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if(totalDiamond > 2000){
      return totalDiamond - 2000;
    }else{
      return totalDiamond;
    }
    }
    
    const myDiamond = gemsToDiamond(100,5,1)
    console.log(myDiamond)
