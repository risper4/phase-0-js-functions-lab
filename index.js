
function calculateTax (amount){
    const taxValue = amount * (10/100)
    return taxValue
}
console.log(calculateTax(100))


function convertToUpperCase (text){
    const upperCase = text.toUpperCase()
    return upperCase
}
console.log(convertToUpperCase("discount"));



function findMaximum (num1, num2){
    const largerNum = Math.max(num1, num2)
    return largerNum
}
console.log(findMaximum('25','72'));



function isPalindrome (word){
    const palindrome = word.split("").reverse().join("")
    return word === palindrome
}
console.log(isPalindrome("level"));
console.log(isPalindrome("race"));


function calculateDiscountedPrice (originalPrice, discountPercentage){
    let discount = originalPrice * (discountPercentage/100)
    priceAfterDiscount = originalPrice + discount
    return priceAfterDiscount
}
console.log(calculateDiscountedPrice(200, 15))









// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };