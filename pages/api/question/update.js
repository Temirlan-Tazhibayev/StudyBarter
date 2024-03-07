// update.js

import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, title, text, tags, userId, isAdmin } = req.body;
 

      if (!id || !title || !text) {
        return res.status(400).json({ message: 'Не передан идентификатор документа или данные для обновления' });
      }

      const db = await connectToDatabase();
      const collection = db.collection('Questions');

      let filter;
      if (isAdmin) {
          filter = { _id: ObjectId(id) };
      } else {
          filter = { _id: ObjectId(id), author: userId };
      }


      // Обновляем документ по идентификатору
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, text, tags, modified_date: new Date()} }
      );

      if (result.modifiedCount === 1) {
        res.status(200).json({ message: 'Question updated successfully' });
    } else {
        res.status(403).json({ message: 'Permission denied or Question not found' });
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при обновлении данных в MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
