/*
@Author : Jirapan Y.
@Date : 16  Mar 2021
*/
function reverse(nums, start) {
    let i = start
    let j = nums.length - 1;

    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function nextPermutation(nums) {

    if(typeof(nums) != 'object' || '') return 'invalid value. example [1,2,3]'
    let checkitem = nums.every((item)=>{
       return typeof item === 'number'
    })
    try {
        if(!checkitem) return nums.sort();
    } catch (error) {
        return nums;
    }

    let i = nums.length - 2;

    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
    return nums;
}


// numbers
let exampleNumber = [[1,2,3],[3,2,1],[1,1,5],[5,4,10]]
for(let i=0; i<exampleNumber.length; i++){
    console.log(nextPermutation(exampleNumber[i]));
}
