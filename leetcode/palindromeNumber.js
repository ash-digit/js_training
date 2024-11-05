const isPalindrome = function(x) {
    let isIt = true
    const splitedDigits = x.toString().split("");
   const reversedDigits = [...splitedDigits].reverse()
   console.log(reversedDigits)
   for(let i = 0; i < splitedDigits.length; i++){
       if(splitedDigits[i] !== reversedDigits[i]){
           isIt = false;
           break;
       }else{
           isIt = true;
       }
   }
   return isIt;
};
console.log(isPalindrome(10000021))
