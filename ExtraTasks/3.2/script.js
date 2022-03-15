function task(array) {
    let timeSum = 0;
    let sum = 0;
    if (array.length === 0 || array.length === 1) return timeSum;


    for (let i = 0, j = i + 1; j < array.length; j++) {

        if (array[j] > array[i]) {
            if (array[j + 1] && array[j + 1] > array[j]) {
                continue;
            } else {
                timeSum += array[j] - array[i];
                continue;
            }
            // timeSum += (array[j] - array[i]) + task(array.slice(j + 1));
            // continue;
        } else {
            i = j;
        }
    }
    if (timeSum > sum) {
        sum = timeSum;
        timeSum = 0;
    }

    return sum;
}

//[7,1,5,3,6,4]
let prices = [1, 2, 3, 4, 5];

alert(task(prices));