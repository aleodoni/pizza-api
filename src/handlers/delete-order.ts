import { ObjectId } from 'mongodb';
import connectToDatabase from '../config/mongodb.config';

async function deleteOrder(orderId: string) {
  if (!orderId) {
    throw new Error('To delete an order you need to provide order id');
  }

  try {
    const db = await connectToDatabase();

    const orders = db.collection('orders');

    const orderExist = await orders.findOne({ _id: new ObjectId(orderId) });

    if (!orderExist) {
      throw new Error('Order not found');
    }

    await orders.deleteOne({ _id: orderExist._id });
  } catch (error) {
    throw error;
  }

  return {
    message: `Order ${orderId} was successfully deleted`,
  };
}

export = deleteOrder;
