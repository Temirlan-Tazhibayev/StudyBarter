import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('Questions');

      let { tab, query, page, limit } = req.query;
      console.log(req.query);
      page = parseInt(page) || 1; // По умолчанию показываем первую страницу
      limit = parseInt(limit) || 10; // По умолчанию 10 элементов на странице

      let aggregationPipeline = [];

      // Формируем агрегационный пайплайн
      if (query) {
        aggregationPipeline.push({
          $match: {
            $or: [
              { title: { $regex: query, $options: 'i' } },
              { text: { $regex: query, $options: 'i' } }
            ]
          }
        });
      }
      if (tab == 'new') {
        const twelveHoursAgo = new Date();
        twelveHoursAgo.setHours(twelveHoursAgo.getHours() - 12);
        aggregationPipeline.push({
          $match: { publish_date: { $gte: twelveHoursAgo } }
        });
      } 
      if (tab == 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        aggregationPipeline.push({
          $match: { publish_date: { $gte: weekAgo } }
        });
      } 
      if (tab == 'month') {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        aggregationPipeline.push({
          $match: { publish_date: { $gte: oneMonthAgo } }
        });
      }  

      // Добавляем этапы пагинации
      const offset = (page - 1) * limit;
      aggregationPipeline.push({ $skip: offset });
      aggregationPipeline.push({ $limit: limit });

      // Выполняем агрегацию
      const questions = await collection.aggregate(aggregationPipeline).toArray();

      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении данных из MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
