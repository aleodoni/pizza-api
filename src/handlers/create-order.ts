import connectToDatabase from '../config/mongodb.config';
import CreateOrderDto from '../dtos/order/create-order.dto';

async function createOrder(order: CreateOrderDto) {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error(
      'To order pizza please provide pizza type and address where pizza should be delivered'
    );
  }

  try {
    const db = await connectToDatabase();

    const orders = db.collection('orders');

    const result = await orders.insertOne({
      ...order,
      status: 'pending',
    });

    return { result };
  } catch (error) {
    throw error;
  }
}

export = createOrder;
