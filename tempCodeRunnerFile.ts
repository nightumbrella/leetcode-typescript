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
console.log(executionTime2);