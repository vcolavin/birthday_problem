document.addEventListener('DOMContentLoaded', function(){
  math.config({precision: 2000});
  document.getElementById('submit-precise').onclick = onCalcClick;
  document.getElementById('submit-approx').onclick = onCalcClick;
});

function onCalcClick(event) {
  event.preventDefault();
  var numberOfPeople = parseInt(document.getElementById('number-of-people').value);
  var numberOfDays = parseInt(document.getElementById('days-in-year').value);

  var displayString = "";
  var probability = 0;

  if (numberOfPeople > numberOfDays) {
    probability = 1;
  }
  else if (numberOfDays && numberOfPeople) {
    if (event.target.value === "precise") {
      probability = calculatePreciseProbability(numberOfPeople, numberOfDays);
    }
    else if (event.target.value === "approximate") {
      probability = calculateApproximateProbability(numberOfPeople, numberOfDays)
    }
  }

  displayString = buildDisplayString(probability);

  document.getElementById('answer').style.display = 'block';
  document.getElementById('answer').innerHTML = displayString;
}

// source:
// http://mathworld.wolfram.com/BirthdayProblem.html
// 1 - (d!/((d-n)!) * d^n)
function calculatePreciseProbability(n, d) {

  var numerator = math.factorial(math.bignumber(d));

  var denominator = (
    // note: the docs say "multiply", not "times"
    math.factorial(math.bignumber(d - n)).times(math.pow(d, n))
  )

  var q = math.divide(numerator, denominator);
  var p = math.subtract(1, q);

  return math.round(p, 100);
}

// source:
// http://mathworld.wolfram.com/BirthdayProblem.html
// 1 - (1 - (n / 2d)^(n-1))
function calculateApproximateProbability(n, d) {
  var innerVal = math.bignumber(1 - (n / (2 * d)))

  var q = math.pow(innerVal, n - 1)
  var p = math.subtract(1, q)

  return math.round(p, 100);
}

function buildDisplayString(probability) {
  return "Probability two people share a birthday: " + probability;
}