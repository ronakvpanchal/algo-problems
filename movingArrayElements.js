/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var zerocount = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            zerocount++;
        }
    }

    while (zerocount > 0) {
        let index = nums.indexOf(0);
        for (let i = index; i < nums.length - 1; i++) {
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        }
        zerocount--;
    }

    console.log(nums);
};

moveZeroes([1, 0, 15, 0, 12]);
