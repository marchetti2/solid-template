import { Router } from 'express'
import { createUserController } from './useCases'

const routes = Router();

routes.get('/', (_, response) => {
  response.json({ message: 'oi' });
})

routes.post('/', (request, response) => {
  return createUserController.handle(request, response)
})


export { routes }
