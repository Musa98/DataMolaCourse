let currentArray = [-2,1,-3,4,-1,2,1,-5,4];
let sum = currentArray[0];

for (let i = 0; i < currentArray.length; i++){
    let timeSum = currentArray[i];

    if (currentArray[i] > sum){
        sum = currentArray[i];
    }

    for (let j = i + 1; j < currentArray.length; j++){
        timeSum += currentArray[j];
        if (timeSum > sum){
            sum = timeSum;
        } 
    }
}

alert(sum);