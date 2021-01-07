/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let result = [];
    let hashObj = {};

    const maxArray = nums1.length > nums2.length ? nums1 : nums2;
    const minArray = nums1.length > nums2.length ? nums2 : nums1;

    for (let i = 0; i < maxArray.length; i++) {
        if (hashObj[maxArray[i]] == null) {
            hashObj[maxArray[i]] = true;
        }
    }

    for (let i = 0; i < minArray.length; i++) {
        if (hashObj[minArray[i]] != null) {
            result.push(minArray[i]);
            hashObj[minArray[i]] = null;
        }
    }

    return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
