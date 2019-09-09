import 'core-js/stable';
import 'regenerator-runtime/runtime';
import models from '../database/models';
import { async } from 'regenerator-runtime/runtime';

const { travels, travel_requests, departments, users } = models;

export default {
    onewayTripService: async (travelObj) => {
        try {
            return await travels.create(travelObj);
        } catch (err) {
            throw err;
        }
    },

    findTravelById: async (id) => {
		try {
			return await travels.findOne({
				attributes: ['id'],
				where: { id },
			});
		} catch (err) {
			throw err;
		}
	},

    showManagerPendingAppr: async(manager) => {
        try {
            return await travel_requests.findAll({
                where: {
                    approval_status : 'pending'
                },
                include: [
                   {model: users,
                        attributes: ['first_name', 'last_name'], 
                        include: [
                            {model: departments,
                                attributes: ['dept_name', 'line_manager'],
                                where: {
                                    line_manager : manager
                                }
                            } 
                        ]
                    }
                ],
                raw: true
            });
        } catch(err) {
            throw err;
        }
    }
};
