import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query; // Получаем id из параметров запроса

      // Проверяем, что id передан
      if (!id) {
        return res.status(400).json({ message: 'Не передан идентификатор документа' });
      }

      const db = await connectToDatabase();
      const collection = db.collection('Questions');

      // Получение данных по идентификатору из коллекции Questions
      const question = await collection.findOne({ _id: new ObjectId(id) });

      // Проверяем, найден ли документ
      if (!question) {
        return res.status(404).json({ message: 'Документ не найден' });
      }

      res.status(200).json(question);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении данных из MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
