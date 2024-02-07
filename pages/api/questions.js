import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('Questions');

      // Получение всех данных из коллекции Questions
      const questions = await collection.find({}).toArray();
      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении данных из MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
