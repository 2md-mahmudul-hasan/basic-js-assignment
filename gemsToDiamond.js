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