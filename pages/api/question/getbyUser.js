import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { email } = req.query;

            const db = await connectToDatabase();
            const collection = db.collection('Questions');

            const questions = await collection.find({ author: email }).toArray();

            res.status(200).json(questions);
        } catch (err) {
            console.error('Error searching questions:', err);
            res.status(500).json({ error: 'Error searching questions' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

