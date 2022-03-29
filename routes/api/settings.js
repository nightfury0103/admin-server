const express = require('express');
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs');
const filePath = path.resolve(__dirname, '../../domains.db');
const router = express.Router();

const User = require('../../models/User');
router.post('/', async (req, res) => {
    const { refDomain, specDomain, clientDomain, cookieCheckDomain } = req.body;

    let _cookieCheckDomain = cookieCheckDomain;
    while (true) {
        if (_cookieCheckDomain[_cookieCheckDomain.length - 1] !== '/') {
            break;
        }

        _cookieCheckDomain = _cookieCheckDomain.substr(0, _cookieCheckDomain.length - 1);
    }

    let _specDomain = specDomain;
    while (true) {
        if (_specDomain[_specDomain.length - 1] !== '/') {
            break;
        }

        _specDomain = _specDomain.substr(0, _specDomain.length - 1);
    }

    let _clientDomain = clientDomain;
    while (true) {
        if (_clientDomain[_clientDomain.length - 1] !== '/') {
            break;
        }

        _clientDomain = _clientDomain.substr(0, _clientDomain.length - 1);
    }

    let _refDomain = refDomain;
    while (true) {
        if (_refDomain[_refDomain.length - 1] !== '/') {
            break;
        }

        _refDomain = _refDomain.substr(0, _refDomain.length - 1);
    }

    fs.writeFile(filePath, _refDomain +
        '|||||||' + _specDomain +
        '|||||||' + _clientDomain +
        '|||||||' + _cookieCheckDomain,
        err => { });
    const https = require('https');
    const axios = require('axios')

    const instance = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const url = _cookieCheckDomain + `/set_domain?refDomain=${_refDomain}&specDomain=${_specDomain}&clientDomain=${_clientDomain}&cookieCheckDomain=${_cookieCheckDomain}`;
    instance.get(url).then(res => {
        console.log(`statusCode: ${res.status}`)
    }).catch(error => {
        console.error(error)
    })

    res.json('success')
}
);

router.get('/', async (req, res) => {
    let result = {
        refDomain: '',
        specDomain: '',
        clientDomain: '',
        cookieCheckDomain: ''
    }
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        result.refDomain = fileContent.split('|||||||')[0];
        result.specDomain = fileContent.split('|||||||')[1];
        result.clientDomain = fileContent.split('|||||||')[2];
        result.cookieCheckDomain = fileContent.split('|||||||')[3];
    }
    return res.json(result);
})

router.get('/backup', async (req, res) => {
    var backup = require('mongodb-backup-v2');
    const config = require('config');
    const db = config.get('mongoURI');
    console.log(db)
    backup({
        uri: db,
        root: path.resolve(__dirname, '../../'),
        tar: 'blockchaindb.tar',
        callback: (err) => {
            console.log(err)
            res.sendFile(path.resolve(__dirname, '../../blockchaindb.tar'));
        },
        collections: ['blockchainusers', 'notifications', 'visitors']
    });
})

const fileUploader = require('../../middleware/fileUploader');
router.post('/restore', [fileUploader], async (req, res) => {
    const config = require('config');
    const db = config.get('mongoURI');
    var restore = require('mongodb-restore-v2');
    restore({
        uri: db,
        root: path.resolve(__dirname, '../../'),
        tar: 'blockchaindb.tar',
        callback: (err) => {
            console.log(err)
            res.json('success');
        },
        collections: ['blockchainusers', 'notifications', 'visitors']
    });
})

router.post('/account', async (req, res) => {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        res.json("Email does not exists");
        return;
    }

    if (newPassword != confirmPassword) {
        res.json("Confirm password does not match.")
        return;
    }

    const salt = await bcrypt.genSalt(10);

    if (user.password == await bcrypt.hash(oldPassword, salt)) {
        res.json("Old password incorrect.");
        return;
    }

    user.password = await bcrypt.hash(newPassword, salt)
    await user.save();
    res.json(user);
})

module.exports = router;
