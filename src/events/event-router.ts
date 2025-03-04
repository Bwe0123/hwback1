import { Router } from 'express';
import EventController from './event-controller';
import EventService from './event-service';
import { authMiddleware } from '../middlewares/auth-middleware';
//in order to provide our frontend with the user data, we need to specify user routes

const eventRouter = Router();

const eventService = new EventService();
const eventController = new EventController(eventService);

eventRouter.get('/events/', authMiddleware, eventController.getEvents);
eventRouter.post('/events/', authMiddleware, eventController.createEvent);
eventRouter.get('/events/:id', authMiddleware, eventController.getEventById);

eventRouter.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'You have access to this route!' });
  });
  
  export default eventRouter;