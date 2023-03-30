/* function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    const product = num * i;
    console.log(num + " x " + i + " = " + product);
  }
}
multiplicationTable(10); */
function gradeCalculation(grade) {
  if (typeof grade !== "number" || isNaN(grade)) {
    return "Error: Input is not a number.";
  } else if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade < 89) {
    return "B";
  } else if (grade >= 70 && grade < 79) {
    return "C";
  } else if (grade >= 60 && grade < 69) {
    return "D";
  } else {
    return "F";
  }
}
console.log(gradeCalculation(85));
