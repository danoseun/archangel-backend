import { Router } from 'express';

import commentControllers from '../../controllers/commentControllers';
import commentValidation from '../../validation/commentValidation';
import userMiddlewares from '../../middlewares/userMiddlewares';
import tokenMiddleware from '../../middlewares/tokenMiddleware';

const route = Router();
const { addComment, getComments } = commentControllers;
const { validateComment, validateResult } = commentValidation;
const { confirmUserEmail } = userMiddlewares;
const { getToken, verifyToken } = tokenMiddleware;

// handles the api home route...
route.post(
	'/travel/:travel_id/comment',
	getToken,
	verifyToken,
	confirmUserEmail,
	validateComment,
	validateResult,
	addComment
);

route.get('/travel/:travel_id/comment', getToken, verifyToken, getComments);

export default route;
