const path = require('path');
module.exports = function (req, res, next) {
    const cookies = req.cookies;
    if (cookies['allow_visite'] !== '777') {
        res.sendFile(path.resolve(__dirname, '../client', '504.html'));
    }
    else {
        next();
    }
};
