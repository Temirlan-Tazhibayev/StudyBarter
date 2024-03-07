// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import { connectToDatabase } from '@/db';

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         // Connect to the database
//         const db = await connectToDatabase();
//         const collection = db.collection('users');

//         // Find the user with the provided email
//         const user = await collection.findOne({ email });

//         // If user doesn't exist or password is incorrect, return null
//         if (!user || user.password !== password) {
//           return null;
//         }

//         // If email and password are correct, return the user object
//         return { id: user._id, email: user.email, username: user.username };
//       },
//     }),
//   ],
//   database: process.env.DATABASE_URL,
// });
