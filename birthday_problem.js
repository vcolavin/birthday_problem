document.addEventListener('DOMContentLoaded', function(){
  math.config({precision: 2000});
  document.getElementById('submit').onclick = submitClick;
});

function submitClick(event) {
  event.preventDefault()
  var numberOfPeople = document.getElementById('number-of-people').value
  var numberOfDays = document.getElementById('days-in-year').value

  var probability = calculateProbability(numberOfPeople, numberOfDays);

  if (numberOfDays && numberOfPeople) {
    document.getElementById('answer').style.display = 'block'
    document.getElementById('percent').innerHTML = probability
  }
}

// source:
// http://mathworld.wolfram.com/BirthdayProblem.html
// essentially P(people, days) = 1 - (d!/((d-n)!) * d^n)
function calculateProbability(n, d) {

  var numerator = math.factorial(math.bignumber(d))

  var denominator = (
    // note: the docs say "multiply", not "times"
    math.factorial(math.bignumber(d-n)).times(math.pow(d, n))
  )

  var q = math.divide(numerator, denominator)
  var p = math.subtract(1, q)

  return p
}
