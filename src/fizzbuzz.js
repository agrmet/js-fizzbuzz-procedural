const answer = []

// Write your code below this line

for (let index = 1; index <= 15; index++) {
  const element = fizzBuzz(index)
  answer.push(element)
}

function fizzBuzz(input) {
  if (input % 5 === 0 && input % 3 === 0) {
    return 'FizzBuzz'
  } else if (input % 5 === 0) {
    return 'Buzz'
  } else if (input % 3 === 0) {
    return 'Fizz'
  } else {
    return input
  }
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
