import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { query } = req.query; // Получаем текст запроса из параметров запроса
      console.log(query)
      // Проверяем, что query передан
      if (!query) {
        return res.status(400).json({ message: 'Не передан текст запроса' });
      }

      const db = await connectToDatabase();
      const collection = db.collection('Questions');

      // Выполняем поиск документов, содержащих переданный текст запроса в полях "title" или "text"
      const searchResults = await collection.find({
        $or: [
          { title: { $regex: query, $options: 'i' } }, // $regex используется для поиска с учетом регистра
          { text: { $regex: query, $options: 'i' } }
        ]
      }).toArray();
      
      // console.log(searchResults);

      res.status(200).json(searchResults);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при поиске данных в MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
