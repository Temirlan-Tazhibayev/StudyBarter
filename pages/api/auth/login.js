import { loginUser } from '@/pages/api/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await loginUser(email, password);
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}