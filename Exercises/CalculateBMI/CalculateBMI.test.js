const bmiCalculator = require('./CalculateBMI');

test('80 Weigth, 1.80 Heigth ', () => {
    expect(bmiCalculator(80, 1.80)).toBe("Normal")
})
test('100 Weigth, 1.82 Heigth ', () => {
    expect(bmiCalculator(100, 1.82)).toBe("Obese")
})
test('Felipe Reyes ', () => {
    expect(bmiCalculator(60, 1.73)).toBe("Normal")
})
