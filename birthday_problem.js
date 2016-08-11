document.addEventListener('DOMContentLoaded', function(){
  math.config({precision: 2000});
  document.getElementById('submit').onclick = submitClick;
});

function submitClick(event) {
  event.preventDefault()
  var numberOfPeople = parseInt(document.getElementById('number-of-people').value)
  var numberOfDays = parseInt(document.getElementById('days-in-year').value)

  var displayString = ""
  var probability = 0

  if (numberOfPeople > numberOfDays) {
    probability = 1
  }
  else if (numberOfDays && numberOfPeople) {
    probability = calculateProbability(numberOfPeople, numberOfDays)
  }

  displayString = buildDisplayString(probability)

  document.getElementById('answer').style.display = 'block'
  document.getElementById('answer').innerHTML = displayString
}

// source:
// http://mathworld.wolfram.com/BirthdayProblem.html
// essentially, P(people, days) = 1 - (d!/((d-n)!) * d^n)
function calculateProbability(n, d) {

  var numerator = math.factorial(math.bignumber(d))

  var denominator = (
    // note: the docs say "multiply", not "times"
    math.factorial(math.bignumber(d - n)).times(math.pow(d, n))
  )

  var q = math.divide(numerator, denominator)
  var p = math.subtract(1, q)

  return math.round(p, 100)
}

function buildDisplayString(probability) {
  return "Probability two people share a birthday: " + probability
}