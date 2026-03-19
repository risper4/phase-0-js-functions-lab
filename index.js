
function calculateTax (amount){
    const taxValue = amount * (10/100)
    return taxValue
}


function convertToUpperCase (text){
    const upperCase = (convertToUpperCase(text))
    return upperCase
}


function findMaximum (num1, num2){
    const largerNum = Math.max(num1, num2)
    return largerNum
}


function isPalindrome (word){
    const palindrome = word.split("").reverse().join("")
    return word === palindrome
}











// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };