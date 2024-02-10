import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {  
    try {
        const db = await connectToDatabase();
        const collection = db.collection('Questions');
  
        // Данные для вставки
        const questionData = {
            // "title": "when i run this program, i want it to show the buttons to place the ships and button but it only shows up when i close the window",
            // "text": "https://github.com/kal1xm/battleships\n\nCan anyone bored have a look at this, as I am struggling to get this to run properly. it only shows the buttons and places them down in a weird way when you close the tab? i am unsure whether it is to do with the actual code or me not organising the code properly. any help will be amazing as this is for a project due in 2 weeks and i am completely stuck, which is why i am on here.",
            // "tags": ["python"],
            // "author": "Temirlan Tazhibaev",
            // "views": 0,
            // "likes": 0,
            // "comments": 0,
            // "status": "active",
            // "publish_date": "2024-02-07T13:19:16.000Z",
            // "modified_date": null

            "title": "I tired",
            "text": "I don't know why",
            "tags": ["node.js"],
            "author": "Temirlan Tazhibaev",
            "views": 0,
            "likes": 0,
            "comments": 0,
            "status": "active",
            "publish_date": new Date,
            "modified_date": null
        };
  
        // Вставка данных в коллекцию
        const result = await collection.insertOne(questionData);
        console.log(`${result.insertedCount} document was inserted`);
  
        res.status(200).json({ message: `${result.insertedCount} document was inserted` });
    } catch (err) {
        console.error('Error inserting document:', err);
        res.status(500).json({ error: 'Error inserting document' });
    }
}
