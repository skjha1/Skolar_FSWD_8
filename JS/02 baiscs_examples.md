```js
// Example 1 - calculating avg grade
let grades = [85, 90, 78, 92, 88];
let sum = 0;
// Using a for loop ato calculate the sum of grades

for (let i = 0; i< grades.length; i++) {
    sum += grades[i]; // sum = sum + grades[i]
}

let averageGrade = sum / grades.length; // Division operator to find the average
console.log("Average Grade: ",  averageGrade); // Output: Average Grade:  86.6

// Example 2: grade classification 


let grade = 86;

if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B"); // output : Grade: B
} else if (grade >= 70) {
    console.log("Grade: C");
} else if (grade >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F")
}

// Example 3: Attendance checker 
let totalClasses = 40;
let attendedClasses = 20; 
let percentageAttended = (attendedClasses / totalClasses) * 100;

while (percentageAttended < 75) {
    console.log("Attendance is below the required percentage. Attend more classes");
    attendedClasses++;
    percentageAttended = (attendedClasses / totalClasses) * 100;
}

// Final output when the attendance meets the requirement
console.log("Attendance requirement met:" , percentageAttended + "%"); // Output: Attendance requirement met: 75%

// Example 4: student promotion decision 

let grade1 = 85;
let attendance = 60;

if (grade > 60 && attendance >= 75){
    console.log("Student is promoted.");
} else {
    console.log("Student is not promoted.");
}
```
