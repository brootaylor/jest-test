// Using a CommonJS method here...
const functions = require('./functions');

test('Adds 4 + 5 to equal 9', () => {
    expect(functions.add(4, 5)).toBe(9); // Passes
    // expect(functions.add(4, 5)).toBe(10); // Fails
});

test('Adds 4 + 5 to NOT equal 9', () => {
    expect(functions.add(4, 5)).not.toBe(11); // Passes
    // expect(functions.add(4, 5)).not.toBe(9); // Fails
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull(); // Passes
});

// toBeFalsy
test('Should be falsy', () => {
    // expect(functions.checkValue(null)).toBeFalsy(); // Passes
    expect(functions.checkValue(undefined)).toBeFalsy(); // Passes
    // expect(functions.checkValue(2)).toBeFalsy(); // Fails
});

// toStrictEqual
test('User should be "Bruce Taylor"', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Bruce',
        lastName: 'Taylor'
    });
});

// toBeLessThanOrEqual
test('Amount should be under "1780"', () => {
    const amountA = 980;
    const amountB = 800;
    expect(amountA + amountB).toBeLessThanOrEqual(1780);
});

// Regex toMatch
test('There is no "W" in "Mfene"', () => {
    const word = 'Mfene';
    expect(word).not.toMatch(/W/);
});

// Arrays toContain
test('Usernames should contain "Broo"', () => {
    const usernames = ['Mfene', 'Badger', 'Broo', 'Goose'];
    expect(usernames).toContain('Broo');
});
