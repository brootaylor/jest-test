// Using the ES Modules import method...
import { utils } from './utils.esm';

test('Adds 4 + 5 to equal 9', () => {
    expect(utils.add(4, 5)).toBe(9); // Passes
    // expect(utils.add(4, 5)).toBe(10); // Fails
});

test('Adds 4 + 5 to NOT equal 9', () => {
    expect(utils.add(4, 5)).not.toBe(11); // Passes
    // expect(utils.add(4, 5)).not.toBe(9); // Fails
});

// toBeNull
test('Should be null value', () => {
    expect(utils.isNull()).toBeNull(); // Passes
});

// toBeFalsy
test('Should be falsy value', () => {
    // expect(utils.checkValue(null)).toBeFalsy(); // Passes
    expect(utils.checkValue(undefined)).toBeFalsy(); // Passes
    // expect(utils.checkValue(2)).toBeFalsy(); // Fails
});

// toStrictEqual
test('User should be "Bruce Taylor"', () => {
    expect(utils.createUser()).toStrictEqual({
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
