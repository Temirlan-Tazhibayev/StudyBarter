import { connectToDatabase } from '@/db.js'; 
 
export default async function handler(req, res) { 
  if (req.method === 'POST') { 
    const { email, password } = req.body; 
 
    try { 
      const db = await connectToDatabase(); 
      const collection = db.collection('Users'); 
      const user = await collection.findOne({ email }); 
   
      if (!user) { 
        throw new Error('User not found'); 
      } 
   
      // You need to compare hashed passwords here 
      if (user.password !== password) { 
        throw new Error('Incorrect password'); 
      } 
      req.session.set('user', { username });
      await req.session.save();
  
      res.status(200).json({ message: 'Login successful' });
      redirect('/')
    } catch (error) { 
      console.error(error); 
      res.status(401).json({ message: 'Invalid credentials' });  
    } 
  } else { 
    res.status(405).json({ message: 'Method not allowed' }); 
  } 
}