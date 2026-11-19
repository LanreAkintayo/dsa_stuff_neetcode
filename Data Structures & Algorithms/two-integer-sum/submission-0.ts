class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // So, I'm thinking of using a map
        const numToIndex = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const neededNum = target - nums[i];

            if (numToIndex.get(neededNum) !== undefined) {
                return [numToIndex.get(neededNum), i]
            }

            numToIndex.set(nums[i], i);
        }
    }
}
