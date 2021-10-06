const helper = require('../helper/helper')

module.exports = {
    getUsers: async (req, res) => {
        const users = await helper.readUsers();
        res.json(users)
    },

    getUserById: async (req, res) => {
        const {user_id} = req.params;
        const user = await helper.readUser(user_id-1)
        res.json({user})
    },

    createUser: async (req, res) => {
        //TODO получаємо те що вписуємо в пості (постер)
        const user = req.body;

        //TODO дістаємо юзерів і чекаємо їх в авейт
        const users = await helper.readUsers();

        //TODO добавляємо юзера якого прийняли з боді і записуємо останнім елементом
        users.push({id:users[users.length-1].id+1, ...user})

        //TODO записати новий масив юзерів в users.json
        await helper.fs.writeFile(helper.pathToDB, JSON.stringify(users))
        res.end()
    },

    updateUser: (req, res) => {
        res.json('update users')
    },

    deleteUserById: async (req, res) => {
        const {user_id} = req.params;
        const users = await helper.readUsers();
        users.splice(user_id, 1);
        await helper.writeUsers(JSON.stringify(users,null,4));
        res.json(users);
    }
}



