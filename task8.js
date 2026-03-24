//Check whether digits in a given number are the same.

const num = 2221;
const str = num.toString();

let allSame = true;

for ( let i=0; i < str.length; i++){
    if(str[i] !== str[0]){
        allSame = false;
        break;
    }
}    

console.log(allSame);
    
