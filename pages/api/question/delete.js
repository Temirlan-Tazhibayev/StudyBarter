import { connectToDatabase } from "@/db";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id, userId, isAdmin } = req.query;

        try {
            const { db } = await connectToDatabase();
            const questionsCollection = db.collection('Questions');

            let filter;
            if (isAdmin) {
                filter = { _id: ObjectId(id) };
            } else {
                filter = { _id: ObjectId(id), author: userId };
            }

            const result = await questionsCollection.deleteOne(filter);
            if (result.deletedCount === 1) {
                res.status(200).json({ message: 'Question deleted successfully' });
            } else {
                res.status(403).json({ message: 'Permission denied or Question not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to delete question' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}