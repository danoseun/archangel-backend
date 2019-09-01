import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let env = process.env.NODE_ENV || 'development';
let config = require('../config')[env];

let db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config,
    );
}

fs.readdirSync(__dirname)
    .filter(
        file => file.indexOf('.') !== 0 &&
        file !== 'index.js' &&
        file.slice(-3) === '.js',
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;