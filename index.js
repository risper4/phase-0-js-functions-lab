
function calculateTax (amount){
    const taxValue = amount * (10/100)
    return taxValue
}










// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };