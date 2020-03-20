const User = require('./../entities/user.entity');

module.exports = class UserRepository {
    static async getUsers() {
        return await User.findAll({raw: true})
    }

    static async create(user) {
        return await User.create({
            first_name: user.first_name,
            last_name: user.last_name,
        });
    }

    static async update(id, data) {
        return await User.update({
            first_name: data.first_name,
            last_name: data.last_name
        }, {
            where: {
                user_id: id
            }
        })
    }

    static async delete(id) {
        return await User.destroy({
            where: {
                user_id: id
            }
        })
    }
}