import { connectToDatabase } from '@/db.js';
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const db = await connectToDatabase();
    const collection = db.collection('users');

    // Проверяем, существует ли пользователь с таким email
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаем нового пользователя
    const newUser = {
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(), 
      updatedAt: new Date(),
    };

    // Вставляем пользователя в базу данных
    await collection.insertOne(newUser);

    return res.status(201).json({ message: "User created successfully" });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
 
             
          