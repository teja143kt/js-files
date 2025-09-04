let students = [
  { name: 'raju', marks: 99 },
  { name: 'student2', marks: 69 },
  { name: 'student3', marks: 5 },
  { name: 'student4', marks: 45 }
]
let total = 0;
let avg = 0;
function averagemarks() {
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].marks;
  }
  console.log("total marks of student:" + total);
  avg = total / students.length;
  console.log("average marks of student:" + avg);
}
averagemarks();

let topper = (students) => {
  let toppers = students[0];
  for (i = 1; i < students.length; i++) {
    if (students[i].marks > toppers.marks) {
      toppers = students[i];
    }
  }
  return toppers;
}
console.log(topper(students).name, topper(students).marks)