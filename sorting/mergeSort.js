let merge = (arr1, arr2) => {
    let sorted = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (i >= arr1.length) {
            sorted.push(arr2[j]);
            j++;
            continue;
        }
        if (j >= arr2.length) {
            sorted.push(arr1[i]);
            i++;
            continue;
        }

        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i]);
            i++;
        } else {
            sorted.push(arr2[j]);
            j++;
        }
    }

    return sorted;
};

let mergeSort = (arr) => {
    if (!arr) {
        return [];
    }

    if (!arr.length) {
        return [];
    }

    if (arr.length <= 1) {
        return arr;
    }

    let halfIndex = Math.floor(arr.length / 2);

    let firstHalf = mergeSort(arr.slice(0, halfIndex));
    let secondHalf = mergeSort(arr.slice(halfIndex));

    let result = merge(firstHalf, secondHalf);

    return result;
};

let randomInt = () => {
    return Math.floor(Math.random() * 100000);
};

let generateBigArray = (len) => {
    let arr = [];
    for (let index = 0; index < len; index++) {
        arr.push(randomInt());
    }
    return arr;
};
let unsortedArr = generateBigArray(1000 * 100);

console.time("runtime");
let sortedResult = mergeSort(unsortedArr);
console.timeEnd("runtime");

console.log(sortedResult);

console.log("end");
