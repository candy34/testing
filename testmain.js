/*
* @type function
* @param {Number} x - is a number to be summed
* @returns {Number} - sum of all numbers that are arguements
*/
function sum (x, y) {
  const args = Array.from(arguments)
  let total = 0
  args.forEach(function (item) {
    total += item
  })
  return total
}

function multiply (x, y) {
  return x * y
}
