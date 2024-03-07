import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToDatabase() {
  try {
    if (!client.isConnected) {
      await client.connect();
    }
    return client.db('studybarter1');
  } catch (error) {
    console.error('Ошибка при подключении к MongoDB:', error);
    throw error;
  }
}

export async function disconnectFromDatabase() {
  try {
    if (client.isConnected) {
      await client.close();
    }
  } catch (error) {
    console.error('Ошибка при отключении от MongoDB:', error);
    throw error;
  }
}
