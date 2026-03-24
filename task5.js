//Create new string from a given string by changing position of first and last characters.

const str="JavaScript";
const first=str.charAt(0);
const last=str.charAt(str.length-1);
const body=str.substring(1, str.length-1);
const result = last + body + first;
console.log(result)