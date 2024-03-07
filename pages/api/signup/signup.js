import { connectToDatabase } from "@/db"; 
import { redirect } from "next/dist/server/api-utils";
 
export default async function handler(req, res) { 
    if (req.method === 'POST') { 
        const { email, username, password, isAdmin } = req.body; 
        try { 
            const db = await connectToDatabase(); 
            const collection = db.collection('users'); 
             
            const newUser = { 
                "username":username, 
                "email": email, 
                "password": password, 
                "createdAt": new Date(), 
                "updatedAt": new Date(), 
                "isAdmin": isAdmin || false  
            }; 
 
            const result = await collection.insertOne(newUser); 
            res.status(200).json({ message: 'User created successfully', userId: result.insertedId }); 
            redirect('/login')
        } catch (error) { 
            console.error(error); 
            res.status(500).json({ message: 'Failed to create user' }); 
        } 
    } else { 
        res.status(405).json({ message: 'Method not allowed' }); 
    } 
}