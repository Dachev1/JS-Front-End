function sortingNumbers(numbersArr) {
    numbersArr.sort(function(a, b) {
        return a - b;
    });

    let resultArr = [];

   for (let i = 0; i < numbersArr.length / 2; i++) {
    resultArr.push(numbersArr[i]);
    resultArr.push(numbersArr[numbersArr.length - i - 1]);
   }

   if (numbersArr.length % 2 !== 0) {
    resultArr.pop()
   }
   
   return resultArr;
}

sortingNumbers([1, 2, 3, 4, 5]);