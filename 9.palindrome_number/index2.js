/*
Given an integer x, return true 
if x is a palindrome, and false otherwise.
*/
var isPalindrome = function(x) {
    if(x<0) return false;
    let copy = x;
    let reverse = 0;
    while(copy>0){
        reverse = reverse*10 + copy%10;
        copy = Math.floor(copy/10);

    }
    return reverse === x

};

isPalindrome(13231);
isPalindrome(1);
isPalindrome(-121);
isPalindrome(10);
