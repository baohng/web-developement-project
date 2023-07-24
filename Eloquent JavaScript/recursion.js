function isEven(nums) {
  if (nums == 0) {
    return true;
  } else if (nums == 1) {
    return false;
  } else if (nums > 1){
    return isEven(nums-2);
  } else {
    nums = -nums;
    return isEven(nums);
  }
}

console.log(isEven(-1));