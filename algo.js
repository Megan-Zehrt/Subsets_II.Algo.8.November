// 90. Subsets II


// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.








/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
    let results = []
    nums.sort((a,b) => a-b)

    function helper(index, temp){

        results.push([...temp])

        for(let i = index; i < nums.length; i++){

            if(i > index && nums[i] === nums[i-1]) continue

            temp.push(nums[i])
            helper(i + 1, temp)
            temp.pop()
        }
    }

    helper(0, [])
    return results
};