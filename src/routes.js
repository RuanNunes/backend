const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

const auth = require('./middleware/auth');

const UserController = require('./controllers/UserController');
const PlaceController = require('./controllers/PlaceController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

const pathUsers = '/Users';
const pathPlaces = '/Places';
const pathSessions = '/Sessions';

routes.post(pathSessions, SessionController.store);
routes.post(pathUsers, upload.single('avatar_url'), UserController.store);

routes.use(auth);

routes.get(pathUsers, UserController.index);
routes.delete(pathUsers, UserController.destroy);
routes.put(pathUsers, UserController.update);

routes.post(pathPlaces, upload.single('avatar_url'), PlaceController.store);
routes.post(pathPlaces, PlaceController.store);
routes.get(pathPlaces, PlaceController.index);
routes.delete(pathPlaces, PlaceController.destroy);
routes.put(pathPlaces, PlaceController.update);

module.exports = routes;
