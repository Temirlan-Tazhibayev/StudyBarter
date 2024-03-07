import { connectToDatabase } from '@/db.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log(email, password)
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const db = await connectToDatabase();
    
    const collection = db.collection('users');
    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });


    // Отправка токена в ответе
    return res.status(200).json({ message: "Authentication successful", user, token });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
