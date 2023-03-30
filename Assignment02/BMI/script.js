function calculateBMI() {
  /* select action data */
  let height = document.querySelector("#heightInput").value;
  let weight = document.querySelector("#weightInput").value;

  let result = document.querySelector("#result");

  const BMI = weight / (height * height);
  console.log(BMI, height * height);

  /* result show on display web page */
  result.innerHTML = `Your BMI is ${BMI.toFixed(2)}`;
}
