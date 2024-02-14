// update.js

import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query; // Получаем id из параметров запроса
      const { title, text } = req.body; // Получаем данные из тела запроса

      // Проверяем, что id и данные для обновления переданы
      if (!id || !title || !text) {
        return res.status(400).json({ message: 'Не передан идентификатор документа или данные для обновления' });
      }

      const db = await connectToDatabase();
      const collection = db.collection('Questions');

      // Обновляем документ по идентификатору
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, text, modified_date: new Date()} }
      );

      // Проверяем, был ли документ обновлен
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Документ не найден' });
      }

      res.status(200).json({ message: 'Документ успешно обновлен' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при обновлении данных в MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
