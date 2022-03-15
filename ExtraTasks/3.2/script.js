function task(array) {
    let sum = 0;

    if (array.length < 1 || array.length > 3 * (10 ** 4)) return 'Incorrect length';

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] > 10 ** 4) return 'Incorrect value';
    }


    for (let i = 0, j = i + 1; j < array.length; j++) {

        if (array[j] > array[i]) {
            if (array[j + 1] && array[j + 1] > array[j]) {
                continue;
            } else {
                sum += array[j] - array[i];
                i = j = j + 1;
                continue;
            }

        } else if (array[i] > array[j]) {
            i = j;
            continue;
        }
    }

    return sum;
}

//Test Arrays
let prices = [7, 1, 5, 3, 6, 4];
// let prices = [1,2,3,4,5,6,7];
// let prices = [7,7,7,1,2,3];
// let prices = [3,2,6,5,0,3];
// let prices = [1,2,3,3,3,1,2];
// let prices = [7,6,5,4,5,6,7];

alert(task(prices));