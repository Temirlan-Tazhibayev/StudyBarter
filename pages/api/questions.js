import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('Questions');
      // console.log(req.initQuery)
      let { tab, query } = req.query;
      console.log(req.query);
      // console.log(tab)
      if (tab == 'new') {
        const twelveHoursAgo = new Date();
        twelveHoursAgo.setHours(twelveHoursAgo.getHours() - 12);

        const questions = await collection.find({ publish_date: { $gte: twelveHoursAgo } }).toArray();
        res.status(200).json(questions);
      } else if (tab == 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        
        const questions = await collection.find({ publish_date: { $gte: weekAgo } }).toArray();
        res.status(200).json(questions);
      } else if (tab == 'month') {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        const questions = await collection.find({ publish_date: { $gte: oneMonthAgo } }).toArray();
        res.status(200).json(questions);
      } else {
        // Handle other cases or combine them
        const questions = await collection.find({}).toArray();
        res.status(200).json(questions);
      } 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении данных из MongoDB' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
