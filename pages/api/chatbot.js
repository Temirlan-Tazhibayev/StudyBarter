import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {  
    if (req.method === 'POST') {
        try {
            const db = await connectToDatabase();
            const collection = db.collection('chatbot');

            var { question } = req.body;
            console.log(req)
            
            question = {
                text: question,
                createDate: new Date
            }

            const result = await collection.insertOne(question);
            console.log(`chatbot-question was inserted`);

            res.status(200).json({ message: `${result.insertedCount} documents were inserted` });
        } catch (err) {
            console.error('Error inserting documents:', err);
            res.status(500).json({ error: 'Error inserting documents, ' + err });
        }
    } else {
        res.status(404);
    }
}
