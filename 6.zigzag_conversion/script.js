/* 
The string "PAYPALISHIRING" is written in a zigzag pattern
 on a given number of rows like this:
  (you may want to display this pattern
   in a fixed font for better legibility)
   P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
   */
var convert = function(s, numRows) {
    if(s.length<=numRows || numRows === 1) return s;
    let rows = new Array(numRows).fill('');
    let direction = false;
    let count = 0

    for(let i=0; i<s.length; i++){
        let curr = s[i]
        rows[count] += curr
        if (count===0 || count>=numRows-1){
            direction = !direction
        }
        direction ? count++ : count--
    }
    return rows.join("")
};