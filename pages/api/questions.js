import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('Questions');
       
      let { tab, query, page, limit } = req.query;
      // console.log(req.query);
      page = parseInt(page) || 1; // По умолчанию показываем первую страницу
      limit = parseInt(limit) || 10; // По умолчанию 10 элементов на странице

      let dbQuery = {};
      if (tab == 'new') {
        const twelveHoursAgo = new Date();
        twelveHoursAgo.setHours(twelveHoursAgo.getHours() - 12);
        dbQuery = { publish_date: { $gte: twelveHoursAgo } };
      } 
      if (tab == 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        dbQuery = { publish_date: { $gte: weekAgo } };
      } 
      if (tab == 'month') {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        dbQuery = { publish_date: { $gte: oneMonthAgo } };
      }  

      // Вычисляем смещение (offset) для пагинации
      const offset = (page - 1) * limit;

      // Запрос к базе данных с учетом пагинации
      const questions = await collection.find(dbQuery).skip(offset).limit(limit).toArray();
      
      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении данных из MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
