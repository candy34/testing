// Sum

it('should add at least 2 numbers', function () {
  const twoPlusFour = sum(2, 4)

  expect(typeof sum).tobe('function')
  expect(typeof twoPlusFour).tobe('number')

  expect(twoPlusFour).tobe(6)
  expect(sum(0, 2)).tobe(2)
})

it('sum should be able to handle multiple values to add', function () {
  expect(sum(2, 3, 4, 10, 100)).tobe(119)
})

// multiply
it('multiply should only accept 2 numbers, nothing more', function () {
  expect(multiply(2, 2, 2, 2, 2, 2)).tobe(4)
  expect(multiply(10, 10, 0, 0, 0, 0)).tobe(100)
})

it('should return the value of multiplying 2 numbers together', function () {
  expect(multiply(1, 3)).tobe(3)
  expect(multiply(3, 1)).tobe(3)
})
