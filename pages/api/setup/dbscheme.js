import { connectToDatabase } from "@/db";
// Обработчик API для создания коллекции с определенной схемой
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const db = await connectToDatabase(); // Подключаемся к базе данных

            // Определяем схему для коллекции
            const collectionSchema = {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        required: ["title", "text", "tags", "author", "views", "likes", "comments", "status", "publish_date", "modified_date"],
                        properties: {
                            title: { bsonType: "string" },
                            text: { bsonType: "string" },
                            tags: {
                                bsonType: "array",
                                items: { bsonType: "string" }
                            },
                            author: { bsonType: "string" },
                            views: { bsonType: "int" },
                            likes: { bsonType: "int" },
                            comments: { bsonType: "int" },
                            status: {
                                enum: ["active", "inactive"]
                            },
                            publish_date: { bsonType: "date" },
                            modified_date: { bsonType: "date" }
                        }
                    }
                }
            };

            // Создаем коллекцию с указанной схемой
            await db.createCollection('Questions', collectionSchema);
            
            res.status(201).json({ message: 'Коллекция успешно создана с указанной схемой' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка при создании коллекции в MongoDB' });
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}
