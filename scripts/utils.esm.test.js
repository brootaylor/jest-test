// Using the ES Modules import method...
import { utilsA, utilsB } from './utils.esm';

test('Adds 4 + 5 to equal 9', () => {
    const add1 = utilsA.add(4, 5);
    expect(add1).toBe(9);

    const add2 = utilsB.add(4, 5);
    expect(add2).toBe(9);
});

test('Adds 4 + 5 to NOT equal 9', () => {
    const add1 = utilsA.add(4, 3);
    expect(add1).not.toBe(9);

    const add2 = utilsB.add(4, 78);
    expect(add2).not.toBe(9);
});

// toBeNull
test('Should be null value', () => {
    const value = utilsA.isNull();
    expect(value).toBeNull();
});

// toBeFalsy
test('Should be falsy value', () => {
    const falsyA = utilsA.checkValue(null);
    expect(falsyA).toBeFalsy();

    const falsyB = utilsB.checkValue(undefined);
    expect(falsyB).toBeFalsy();

    // const falsyC = utilsB.checkValue(2);
    // expect(falsyC).toBeFalsy();
});

// toStrictEqual
test('User should be "Bruce Taylor"', () => {
    expect(utilsA.createUser()).toStrictEqual({
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

describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
    });

    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
});
