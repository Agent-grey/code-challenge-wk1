/*Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/
  
        function getStudentGrade() {
          let marks = prompt("Enter the student's marks (0-100):");
          marks = parseInt(marks);
        
          if (marks > 100 || marks < 0) {
            console.log("Invalid marks. Please enter a value between 0 and 100.");
            return;
          }
        
          let grade;
          if (marks > 79) {
            grade = 'A';
          } else if (marks >= 60) {
            grade = 'B';
          } else if (marks >= 49) {
            grade = 'C';
          } else if (marks >= 40) {
            grade = 'D';
          } else {
            grade = 'E';
          }
        
          console.log(`The grade is: ${grade}`);
        }
        
        getStudentGrade();
        
        