import { connectToDatabase } from '@/db.js';

export default async function loginUser(email, password) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('Users');
    const user = await users.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    // You need to compare hashed passwords here
    if (user.password !== password) {
      throw new Error('Incorrect password');
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
  