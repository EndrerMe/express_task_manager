const userRepository = require('./../repositories/user.repository');

module.exports = class UserService {
    static async getUsers() {
        return await userRepository.getUsers();
    }

    static async create(data) {
        return await userRepository.create(data);
    }

    static async update(id, data) {
        return await userRepository.update(id, data);
    }

    static async delete(id) {
        return await userRepository.delete(id);
    }
}