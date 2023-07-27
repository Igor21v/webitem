const fs = require('fs');
const path = require('path');

module.exports = function (username, password) {
    const users = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, 'keys', 'users.json'), 'UTF-8'),
    );

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );
    return userFromBd;
};
