function movingZeros(nums){
    let left=0

    for(let fast=0;fast<nums.length;fast++){
        if(nums[fast] !==0){
            let temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
            left++
        }
    }

}