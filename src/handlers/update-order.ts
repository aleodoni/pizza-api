import UpdateOrderDto from '../dtos/order/update-order.dto';
import { ObjectId } from 'mongodb';
import connectToDatabase from '../config/mongodb.config';

async function updateOrder(orderId: string, updates: UpdateOrderDto) {
  if (!orderId || !updates) {
    throw new Error('Order ID and updates are required to update an order');
  }

  try {
    const db = await connectToDatabase();

    const orders = db.collection('orders');

    await orders.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { ...updates } }
    );

    return;
  } catch (error) {
    throw error;
  }
}

export = updateOrder;
