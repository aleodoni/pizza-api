import { Db } from 'mongodb';
import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://pizzaApi:6c6MT4kUc5CWcuSf@cluster0.o7nza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

let cachedDb: Db | null = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const db = client.db('pizza-api');

  cachedDb = db;

  return db;
}

export = connectToDatabase;
