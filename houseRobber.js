function getMaxMonet(arr) {
  if (arr.length == 0) return 0;
  let dp = new Array(arr.length).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
  }
 
  return dp[arr.length-1];
}
module.exports = getMaxMonet;
