const plural = require("./plural")

test('Check if 1 is plural', () => {
    expect(plural(1)).toBe(false)

})