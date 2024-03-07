

import { connectToDatabase } from "@/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { userId } = req.query;

            const db = await connectToDatabase();
            const collection = db.collection('users');

            const user = await collection.findOne({ _id: new ObjectId(userId) });
            
            if (user) {
                res.status(200).json({ user });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}