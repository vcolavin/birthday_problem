// source for the math
// http://mathworld.wolfram.com/BirthdayProblem.html

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('submit').onclick = function(event) {
    event.preventDefault()
    var numberOfDays = document.getElementById('days-in-year').value
    var numberOfPeople = document.getElementById('number-of-people').value

    var probability = calculateProbability(numberOfDays, numberOfPeople);

    document.getElementById('answer').style.display = 'block'
    document.getElementById('percent').innerHTML = probability
  }
});

function calculateProbability(days, people) {
  return 6;
}

// http://stackoverflow.com/questions/3959211/fast-factorial-function-in-javascript
function factorial(num)
{
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
