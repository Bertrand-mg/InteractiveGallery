function hasSubarrayWithTargetSum(arr, target) {
    let current_sum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      current_sum += arr[end];
  
      while (current_sum > target && start <= end) {
        current_sum -= arr[start];
        start++;
      }
  
      if (current_sum === target) {
        return true;
      }
    }
  
    return false;
  }
  
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 17;
  console.log(hasSubarrayWithTargetSum(arr, target)); 