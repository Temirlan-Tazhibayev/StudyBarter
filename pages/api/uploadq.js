import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Parse data from the request body
    const { title, text, expectations, tags } = req.body;
    console.log(req.body)
    try {
      // Connect to the database
      const db = await connectToDatabase();
      const collection = db.collection('Questions');


      const questionData = {
        "title": title,
        "text": text,
        "expectations": expectations,
        "tags": [tags],
        "author": null,
        "views": 0,
        "likes": 0,
        "comments": 0,
        "status": "active",
        "publish_date": new Date,
        "modified_date": null
      };

      // Insert the data into the collection
      await collection.insertOne({ ...questionData });

      // Respond with success message
      res.status(201).json({ message: 'Question added successfully!' });
    } catch (error) {
      // Handle errors
      console.error('Error adding question:', error);
      res.status(500).json({ error: 'Failed to add question.' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405); // Method Not Allowed
  }
}
