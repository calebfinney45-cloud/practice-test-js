//Difference between a number n and 13.If number exceeds 13, double the absolute difference.

const n = 18;
let diff = Math.abs(n - 13);

if (n > 13){
    diff = diff * 2;
}
console.log("The result for n=" + n + " is: " + diff);
