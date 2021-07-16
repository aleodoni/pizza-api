import { ObjectId } from 'mongodb';
import connectToDatabase from '../config/mongodb.config';

async function getOrders(orderId?: string) {
  try {
    const db = await connectToDatabase();

    const orders = db.collection('orders');

    if (typeof orderId === 'undefined') {
      return await orders.find().toArray();
    }

    return await orders.find({ _id: new ObjectId(orderId) }).toArray();
  } catch (error) {
    throw error;
  }
}

export = getOrders;
