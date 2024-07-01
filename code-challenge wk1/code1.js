/*Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/


if(marks>79) {
        return 'A'
}
else if (marks>=60) {
        return 'B'
}
else if (marks>=50) {
        return 'C'
}
else if (marks>=40){
        return 'D'
}
else {
        return 'E'
}

const computerMarks = parseFloat(prompt('Enter computer marks:'));
const physicsMarks = parseFloat(prompt('Enter physics marks:'));
const mathsMarks = parseFloat(prompt('Enter maths marks:'));

const totalMarks = computerMarks + physicsMarksMarks + mathsMarks;
const averageMarks = totalMarks / 3;
const grade = calculateGrade(averageMarks);

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Grade: ${grade}`);