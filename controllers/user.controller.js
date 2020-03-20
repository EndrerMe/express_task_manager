const { Router } = require('express');
const userService = require('./../core/services/user.service');
const router = Router();
const base = '/user/'

router.post(`${base}create`, async (req, res) => {
    const data = req.body;
    const result = await userService.create(data);
    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({});
})

router.get(`${base}getUsers`, async (req, res) => {
    const users = await userService.getUsers();
    if (!users) {
        res.sendStatus(404)
        return
    }

    res.json(JSON.stringify(users))
})

router.put(`${base}update/:user_id`, async (req, res) => {
    const id = req.params.user_id;
    const data = req.body
    const result = await userService.update(id, data);

    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({});
})

router.delete(`${base}delete/:user_id`, async (req, res) => {
    const id = req.params.user_id;
    const result = await userService.delete(id);

    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({})
})

module.exports = router;