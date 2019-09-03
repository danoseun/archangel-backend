import travelServices from '../services/travelServices';
import message from '../utils/messageUtils';
import response from '../utils/response';
import statusCode from '../utils/statusCode';

const { onewayTripService } = travelServices;
const { successResponseWithData, errorResponse } = response;

export default {
    createOneWayTrip: async(req, res) => {
        try {
            const { origin, destination, departure_date, travel_purpose } = req.body;
            const userId = req.payload.id;
            
            const travelObj = { user_id:userId, origin, destination, departure_date, travel_purpose };

            const data = await onewayTripService(travelObj);
        
            successResponseWithData(res, statusCode.created, message.oneWayTripCreated, data);
        } catch (err) {
            console.log('error', err.message);
            errorResponse(res, statusCode.serverError, err);
        }
    },
};
