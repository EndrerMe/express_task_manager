const Task = require('./../entities/task.entity');

module.exports = class TaskRepository {
    static async create(task) {
        return await Task.create({
            title: task.title,
            description: task.description,
            status: task.status,
            user_id: task.user_id
        });
    }

    static async delete(id) {
        return await Task.destroy({
            where: {
                id: id
            }
        })
    }

    static async getTasks() {
        return await Task.findAll({raw: true})
    }
    
    static async update(id, data) {
        return await Task.update({
            title: data.title,
            description: data.description,
            status: data.status
        }, {
            where: {
                id: id
            }
        })
    }

    static async updateStatus(id, data) {
        return await Task.update({
            status: data.status
        }, {
            where: {
                id: id
            }
        })
    }

    static async updateUserForTask(task_id, user_id) {
        return await Task.update({
            user_id: user_id
        }, {
            where: {
                id: task_id
            }
        })
    }

    static async filterByStatus(status) {
        return await Task.findAll({
            where: {
                status: status
            }
        })
    }

    static async sortById() {
        return await Task.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
    }
}