import { connectToDatabase } from "@/db";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, username, password, isAdmin } = req.body;

        try {
            const { db } = await connectToDatabase();
            const usersCollection = db.collection('Users');

            const newUser = {
                username,
                email,
                password,
                createdAt: new Date(),
                updatedAt: new Date(),
                isAdmin: isAdmin || false 
            };

            const result = await usersCollection.insertOne(newUser);
            res.status(200).json({ message: 'User created successfully', userId: result.insertedId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}