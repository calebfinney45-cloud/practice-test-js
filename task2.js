//Compute average marks of students and determine corresponding grade

const students = [
  {name:'Jane', marks:80},
  {name:'Ciara', marks:77},
  {name:'Smith', marks:88},
  {name:'Thomas', marks:95},
  {name:'Shelby', marks:68}
];

let totalSum = 0;

for ( let i=0; i<students.length; i++ ) {
    console.log('Processing:' + students[i].name);
    totalSum += students[i].marks;
}

const average = totalSum/students.length;
let grade ='';

if (average < 60){
   grade = "F";
}
else if (average < 70){
   grade = "D";
}
else if (average < 80){
   grade = "C";
}
else if (average < 90){
    grade = "B";
}
else grade = "A";

console.log("The average marks:" + average);
console.log("The grade is:" + grade);