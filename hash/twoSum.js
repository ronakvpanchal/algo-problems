let twoSum = function (nums, target) {
    let hashObj = {};
    let soln = [];

    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     hashObj[num] = i;
    // }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = target - num;
        if (hashObj[result] != null) {
            soln.push(i);
            soln.push(hashObj[result]);
            break;
        }
        hashObj[num] = i;
    }

    return soln;
};

let result = twoSum([2, 11, 7, 15], 9);
console.log(result);

// https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1115/
