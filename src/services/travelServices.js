/* eslint-disable no-useless-catch */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import models from '../database/models';

const { travel_requests, departments, users } = models;

export const onewayTripService = async (travelObj) => {
  try {
    return await travel_requests.create(travelObj);
  } catch (err) {
    throw err;
  }
};

export const findTravelById = async (id) => {
  try {
    return await travel_requests.findOne({
      attributes: ['id', 'user_id'],
      where: { id },
    });
  } catch (err) {
    throw err;
  }
};

export const showManagerPendingAppr = async (manager) => {
  try {
    return await travel_requests.findAll({
      where: {
        approval_status: 'pending',
      },
      include: [
        {
          model: users,
          attributes: ['first_name', 'last_name'],
          include: [
            {
              model: departments,
              attributes: ['dept_name', 'line_manager'],
              where: {
                line_manager: manager,
              },
            },
          ],
        },
      ],
      raw: true,
    });
  } catch (err) {
    throw err;
  }
};
