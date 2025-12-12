/*
Given an integer x, return true 
if x is a palindrome, and false otherwise.
*/
var isPalindrome = function(x) {
    let s = x.toString()
    if(s.startsWith('-')) return false;
    let start= 0
    let end = s.length-1
    while(start<end){
        if(s[start]===s[end]){
        start++
        end--
        }else{
            return false
        }
    }
            return true

};

isPalindrome(13231);
isPalindrome(1);
isPalindrome(-121);
isPalindrome(10);
