/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    var list1_map = new Map();
    var result = new Map();
    var min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < list1.length; i++) {
        const restaurant = list1[i];
        list1_map.set(restaurant, i);
    }

    for (let i = 0; i < list2.length; i++) {
        const restaurant = list2[i];

        if (list1_map.has(restaurant)) {
            var index1 = list1_map.get(restaurant);
            var index2 = i;
            var sum = index1 + index2;
            if (result.has(sum)) {
                result.set(sum, [...result.get(sum), restaurant]);
            } else {
                result.set(sum, [restaurant]);
            }
            if (min > sum) {
                min = sum;
            }
        }
    }

    return result.get(min);
};

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
var list2 = ["KFC", "Shogun", "Burger King"];

var result = findRestaurant(list1, list2);
console.log(result);
