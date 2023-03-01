const comments = require('./db/comments.json');
const itemRatings = require('./db/itemRatings.json');
const items = require('./db/items.json');
const notifications = require('./db/notifications.json');
const profile = require('./db/profile.json');
const users = require('./db/users.json');

module.exports = function () {
    return {
        comments,
        itemRatings,
        items,
        notifications,
        profile,
        users,
    };
};
