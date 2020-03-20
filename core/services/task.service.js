const taskRepository = require('./../repositories/task.repository');

module.exports = class TaskService {
    static async create(data) {
        return await taskRepository.create(data);
    }

    static async delete(id) {
        return await taskRepository.delete(id);
    }

    static async getTasks() {
        return await taskRepository.getTasks();
    }
    
    static async update(id, data) {
        return await taskRepository.update(id, data)
    }

    static async updateUserForTask(id, data) {
        return await taskRepository.updateUserForTask(id, data)
    }

    static async updateUser(task_id, user_id) {
        return await taskRepository.updateUser(task_id, user_id)
    }

    static async filterByStatus(status) {
        return await taskRepository.filterByStatus(status);
    }

    static async sortById() {
        return await taskRepository.sortById();
    }
}