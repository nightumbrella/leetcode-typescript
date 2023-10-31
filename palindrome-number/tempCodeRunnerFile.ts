function isPalindrome(x: number): boolean {
  var originalString = x.toString();
  var reverseString = originalString.split("").reverse().join("");
  return originalString === reverseString;
}

console.log(isPalindrome(-101));