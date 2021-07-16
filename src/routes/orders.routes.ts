import { Request, Response, Router } from 'express';

import getOrders from '../handlers/get-orders';
import createOrder from '../handlers/create-order';
import updateOrder from '../handlers/update-order';
import deleteOrder from '../handlers/delete-order';

const orderRouter = Router();

orderRouter.get(
  '/orders',
  async (req: Request, res: Response): Promise<any> => {
    return res.json(await getOrders());
  }
);

orderRouter.get(
  '/orders/:orderId',
  async (req: Request, res: Response): Promise<any> => {
    const { orderId } = req.params;
    return res.json(await getOrders(orderId));
  }
);

orderRouter.post(
  '/orders',
  async (req: Request, res: Response): Promise<any> => {
    try {
      return res.json(await createOrder(req.body));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);

orderRouter.put(
  '/orders/:orderId',
  async (req: Request, res: Response): Promise<any> => {
    const { orderId } = req.params;
    try {
      return res.json(await updateOrder(orderId, req.body));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);

orderRouter.delete(
  '/orders/:orderId',
  async (req: Request, res: Response): Promise<any> => {
    const { orderId } = req.params;
    try {
      return res.json(await deleteOrder(orderId));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);

export default orderRouter;
