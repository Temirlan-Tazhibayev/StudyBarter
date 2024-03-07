

import { connectToDatabase } from "@/db";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, text, tags, author } = req.body;

        try {
            const db = await connectToDatabase();
            const questionsCollection = db.collection('Questions');

            const newQuestion = {
                title,
                text,
                tags: [tags],
                author,
                views: 0,
                likes: 0,
                comments: 0,
                status: 'active',
                publish_date: new Date(),
                modified_date: new Date()
            };

            const result = await questionsCollection.insertOne(newQuestion);
            res.status(200).json({ message: 'Question created successfully', questionId: result.insertedId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to create question' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
