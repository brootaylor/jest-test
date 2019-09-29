// Using the ES Modules import method...
import { utils } from './utils.esm';

test('Adds 4 + 5 to equal 9', () => {
    const add1 = utils.add(4, 5);
    expect(add1).toBe(9); // Passes

    const add2 = utils.add(4, 19);
    expect(add2).toBe(9); // Fails
});

test('Adds 4 + 5 to NOT equal 9', () => {
    const add1 = utils.add(4, 5);
    expect(add1).not.toBe(9); // Fails

    const add2 = utils.add(4, 78);
    expect(add2).not.toBe(9); // Passes
});

// toBeNull
test('Should be null value', () => {
    const value = utils.isNull();
    expect(value).toBeNull(); // Passes
});

// toBeFalsy
test('Should be falsy value', () => {
    const falsyA = utils.checkValue(null);
    expect(falsyA).toBeFalsy(); // Passes

    const falsyB = utils.checkValue(undefined);
    expect(falsyB).toBeFalsy(); // Passes

    const falsyC = utils.checkValue(2);
    expect(falsyC).toBeFalsy(); // Fails
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
