const alert = require('./items/alert.json');
const accordion = require('./items/accordion.json');
const animation = require('./items/animation.json');
const loader = require('./items/loader.json');

module.exports = function () {
    return [...alert, ...accordion, ...animation, ...loader];
};
