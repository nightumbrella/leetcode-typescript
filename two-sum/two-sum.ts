// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// first way
const startTime = performance.now();
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(twoSum([1, 2, 3, 4], 5));
// console.log(twoSum([2,7,11,15], 9));
console.log(`Execution time →→→: ${executionTime} milliseconds ←←←`);

// second way

const startTime2 = performance.now();
function twoSum2(nums: number[], target: number): number[] {
  var firstNum = 0;
  var lastNum = nums.length - 1;

  while (firstNum < lastNum) {
    const num = nums[firstNum] + nums[lastNum];
    if (num === target) {
      return [firstNum, lastNum];
    } else if (num < target) {
      firstNum++;
    } else {
      lastNum--;
    }
  }
  return [];
}
const endTime2 = performance.now();
const executionTime2 = endTime2 - startTime2;
console.log(twoSum2([1, 2, 3, 4], 5));
console.log(`Execution time →→→: ${executionTime2} milliseconds ←←←`);
