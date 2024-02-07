import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const tagsCollection = db.collection('Tags');
      const questionsCollection = db.collection('Questions');
      const today = new Date();
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);

      // Получение всех данных из коллекции Tags
      const tags = await tagsCollection.find({}).toArray();

      // Для каждого тега находим количество соответствующих вопросов в коллекции Questions
      for (let tag of tags) {
        const countAll = await questionsCollection.countDocuments({ tags: tag.name });
        const countToday = await questionsCollection.countDocuments({ tags: tag.name, publish_date: { $gte: today.setHours(0, 0, 0, 0) } });
        const countLast7Days = await questionsCollection.countDocuments({ tags: tag.name, publish_date: { $gte: weekAgo.setHours(0, 0, 0, 0), $lt: today.setHours(0, 0, 0, 0) } });

        tag.questionCount = countAll;
        tag.questionCountToday = countToday;
        tag.questionCountLast7Days = countLast7Days;
      }

      res.status(200).json(tags);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении данных из MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
