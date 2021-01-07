const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        for (let j = 0; j < i; j++) {
            const sortedElem = array[j];
            if (key < sortedElem) {
                let temp = array[i];
                array[i] = sortedElem;
                array[j] = temp;
            }
        }
    }

    return array;
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
let sortedResult = insertionSort(unsortedArr);
console.timeEnd("runtime");

console.log(sortedResult);

console.log("end");

// O(n(n-1)) => O(n^2)
