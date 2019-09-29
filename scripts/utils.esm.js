const utilsA = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Bruce' };
        user['lastName'] = 'Taylor';
        return user;
    }
};

// For the sake of having multiple exports
const utilsB = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Mfene' };
        user['lastName'] = 'Goose';
        return user;
    }
};

// Using the ES Modules export method...
export {
    utilsA,
    utilsB
};
