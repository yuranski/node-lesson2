const fs = require('fs/promises');
const path = require('path');
const pathToDB = path.join(process.cwd(), 'DB', 'users.json');

const readUser = async (param) => {
    const data = await fs.readFile(pathToDB, 'utf-8');
    return JSON.parse(data)[param];
}

const readUsers = async () => {
    const data = await fs.readFile(pathToDB, 'utf-8');
    return JSON.parse(data);
}

const writeUsers = async (arr) => {
    await fs.writeFile(pathToDB, arr);
}

module.exports = {readUser,readUsers,writeUsers,path,pathToDB,fs};