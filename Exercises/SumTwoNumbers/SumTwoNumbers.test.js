const sumTwoNumbers = require('./SumTwoNumbers');

test('Sum 100 + 100', () => {
    expect(sumTwoNumbers(100, 100)).toBe(200)
})
test('Sum 200 + 100', () => {
    expect(sumTwoNumbers(200, 100)).toBe(300)
})
test('Sum 0 + 100', () => {
    expect(sumTwoNumbers(0, 100)).toBe(100)
})