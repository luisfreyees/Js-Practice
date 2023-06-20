module.exports = bmiCalculator

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (Math.pow(height, 2)) * 100) / 100;
  if(bmi > 30) {
    return "Obese"
  }
  if (bmi > 25) {
    return "Overweight"
  }
  if (bmi > 18.5) {
    return "Normal"
  }
  else {
    return "Underweight"
  }
}