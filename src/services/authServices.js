import { compareSync } from 'bcryptjs';
import cryto from 'crypto-random-string';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import models from '../database/models';
import sendVerificationEmail from '../utils/email';

const { users, blacklists } = models;

export default {
    signupService: async (userObj) => {
        try {
            const userRes =  await users.create(userObj);
            
            return userRes;
            
            
        } catch (err) {
            throw err;
        }
    },
    // subject to changes
    findUserById: async(userId) => {
        try {
            return await users.findOne({
                where: {
                  id : userId
                },
            });
        } catch (err) {
            throw err;
        }
    },
    findUserById: async (id) => {
		try {
			return await users
				.findOne({
					where: { id },
				});
		} catch (err) {
			throw err;
		}
    },

    updateUserById: async (hash,id) => {
		try {
			return await users
				.findOne(hash,{
					where: { id },
				});
		} catch (err) {
			throw err;
		}
    },
    /**
    *This function will get a user by email address...
    *@param {String} email - the user's email
    *@return {Promise} - response of sequelize
    */
    findUserByEmail: (email) => users.findOne({ where: { email } }),

    /**
    *This function will compare the password supplied by the user with the one in the database...
    *@param {String} password - the user's password supplied
    *@param {String} hashedPassword - the user's password in database
    *@return {boolean} - response of bcrypt hashing
    */
    comparePassword: (password, hashedPassword) => compareSync(password, hashedPassword),

    logoutService: async (token) => {
        try {
            return await blacklists.create({ expired_tokens: token })
        } catch (err) {
            throw err;
        }
    }

};
