// Check if the last digit of three integers are the same.

const num1 = 32;
const num2 = 1442;
const num3 = 512;

const last1 = num1 % 10;
const last2 = num2 % 10;
const last3 = num3 % 10;

if( last1===last2&&last2===last3){
    console.log('true');
}
else {
    console.log('false');
}