// Code your solution here!

function printString(string) {
  let substring
  if (string.length > 1) {
    substring = string[0]
    console.log(substring)
    printString(string.slice(1))
  } else {
    console.log(string[0])
  }
}

function reverseString(string, result = "") {
  if (string.length > 0) {
    result += string[string.length - 1]
    return reverseString(string.slice(0, string.length - 1), result)
  } else {
    return result
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    if (string[0] !== string[string.length - 1]) {
      return false
    }
    return isPalindrome(string.slice(1, string.length - 1))
  } else {
    return true
  }
}

function addUpTo(array, index) {
  if (array.length > 0 && index > 0) {
    return array[0] + addUpTo(array.slice(1), index - 1)
  } else {
    return array[0]
  }
}

function maxOf(array, max = null) {
  if (max !== 0 && !max) {
    max = array[0]
  }
  max = (array[0] > max ? array[0] : max)
  if (array.length > 1) {
    return maxOf(array.slice(1), max)
  } else {
    return max
  }
}

function includesNumber(array, num) {
  if (array[0] === num) {
    return true
  }
  if (array.length > 1) {
    return includesNumber(array.slice(1), num)
  }
  return false
}
