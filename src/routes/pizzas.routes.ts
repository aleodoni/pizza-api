import { Request, Response, Router } from 'express';

import getPizzas from '../handlers/get-pizzas';

const pizzaRouter = Router();

pizzaRouter.get('/pizzas', (req, res) => {
  return res.json(getPizzas());
});

pizzaRouter.get('/pizzas/:pizzaId', (req: Request, res: Response) => {
  const { pizzaId } = req.params;

  return res.json(getPizzas(Number.parseInt(pizzaId)));
});

export default pizzaRouter;
