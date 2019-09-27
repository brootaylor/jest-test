const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Bruce' };
        user['lastName'] = 'Taylor';
        return user;
    }
};

// Using a CommonJS method here...
module.exports = functions;
