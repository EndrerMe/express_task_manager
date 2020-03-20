const { Router } = require('express');
const taskService = require('./../core/services/task.service');
const router = Router();
const base = '/task/'

router.post(`${base}create`, async (req, res) => {
    const data = req.body;
    const result = await taskService.create(data);
    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({});
})

router.get(`${base}getTasks`, async (req, res) => {
    const users = await taskService.getTasks();
    if (!users) {
        res.sendStatus(404)
        return
    }

    res.json(JSON.stringify(users))
})

router.put(`${base}update/:task_id`, async (req, res) => {
    const id = req.params.task_id;
    const data = req.body;
    const result = await taskService.update(id, data);

    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({});
})

router.put(`${base}updateStatus/:task_id`, async (req, res) => {
    const id = req.params.task_id;
    const data = req.body;
    const result = await taskService.updateStatus(id, data);

    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({});
})

router.put(`${base}updateUserForTask/:task_id/:user_id`, async (req, res) => {
    const task_id = req.params.task_id;
    const user_id = req.params.user_id
    const result = await taskService.updateUserForTask(task_id, user_id);

    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({});
})

router.get(`${base}filterByStatus/:status`, async (req, res) => {
    const status = req.params.status;
    const result = await taskService.filterByStatus(status);

    if (!result) {
        res.sendStatus(404);
        return;
    }

    res.json(JSON.stringify(result));
}) 

router.get(`${base}sortById`, async (req, res) => {
    const result = await taskService.sortById();

    if (!result) {
        res.sendStatus(404);
        return;
    }

    res.json(JSON.stringify(result));
}) 

router.delete(`${base}delete/:task_id`, async (req, res) => {
    const id = req.params.task_id;
    const result = await taskService.delete(id);

    if (!result) {
        res.sendStatus(403);
        return;
    }

    res.json({})
})

module.exports = router;