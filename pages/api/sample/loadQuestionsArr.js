import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {  
    try {
        const db = await connectToDatabase();
        const collection = db.collection('Questions');
  
        // Данные для вставки
        const questionDataArr = [
            {
                "title": "How to handle asynchronous operations in Node.js?",
                "text": "I'm struggling to understand how to manage asynchronous tasks effectively in my Node.js application. Can someone provide some guidance or best practices?",
                "tags": [
                    "Node.js",
                    "Asynchronous Programming",
                    "Concurrency"
                ],
                "author": "Temirlan Tazhibaev",
                "views": 0,
                "likes": 0,
                "comments": 0,
                "status": "active",
                "publish_date": new Date("2024-02-13T12:00:00.000Z"),
                "modified_date": null
            },            
            {
              "title": "How to deploy a Node.js application to Heroku?",
              "text": "I've developed a Node.js application and now I want to deploy it to Heroku. Can someone provide a step-by-step guide or share any tips?",
              "tags": [
                "Node.js",
                "Heroku",
                "Deployment"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle errors in Express.js middleware?",
              "text": "I'm building a web application with Express.js and I'm not sure how to properly handle errors within my middleware functions. Any suggestions?",
              "tags": [
                "Node.js",
                "Express.js",
                "Error Handling"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to use MongoDB with Node.js?",
              "text": "I'm new to both MongoDB and Node.js and I'm struggling to understand how to integrate them. Can someone provide a simple example or explain the basics?",
              "tags": [
                "Node.js",
                "MongoDB",
                "Database Integration"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to implement authentication in a Node.js application?",
              "text": "I need to add user authentication to my Node.js application. What are the best libraries or approaches to achieve this?",
              "tags": [
                "Node.js",
                "Authentication",
                "Security"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle file uploads in Node.js?",
              "text": "I'm building a web application with Node.js and I need to implement file upload functionality. What are the recommended approaches or libraries for handling file uploads?",
              "tags": [
                "Node.js",
                "File Upload",
                "Multer"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to test a Node.js application?",
              "text": "I want to write tests for my Node.js application to ensure its reliability. What are the best testing frameworks or strategies for Node.js?",
              "tags": [
                "Node.js",
                "Testing",
                "Mocha",
                "Chai"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle sessions in Express.js?",
              "text": "I'm using Express.js for my web application and I need to implement session management. What are the recommended approaches or libraries for handling sessions?",
              "tags": [
                "Node.js",
                "Express.js",
                "Session Management",
                "Express-Session"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to create a RESTful API with Node.js and Express.js?",
              "text": "I need to build a RESTful API for my application using Node.js and Express.js. What are the best practices and conventions for designing RESTful APIs?",
              "tags": [
                "Node.js",
                "Express.js",
                "RESTful API"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle CORS in Node.js and Express.js?",
              "text": "I'm building a web application with Node.js and Express.js and I need to handle Cross-Origin Resource Sharing (CORS). What are the best practices?",
              "tags": [
                "Node.js",
                "Express.js",
                "CORS",
                "Security"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to implement pagination in a Node.js application?",
              "text": "I have a large dataset that I need to display in my Node.js application and I want to implement pagination. What are the recommended approaches?",
              "tags": [
                "Node.js",
                "Pagination",
                "Database"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle authentication and authorization in a Node.js application?",
              "text": "I'm building a web application with Node.js and I need to implement both authentication and authorization. What are the best practices for doing this?",
              "tags": [
                "Node.js",
                "Authentication",
                "Authorization",
                "Security"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to use WebSocket with Node.js?",
              "text": "I want to add real-time communication capabilities to my Node.js application using WebSocket. Can someone provide guidance or examples?",
              "tags": [
                "Node.js",
                "WebSocket",
                "Real-time Communication"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to schedule tasks in Node.js?",
              "text": "I need to schedule periodic tasks in my Node.js application. What are the recommended libraries or approaches for task scheduling?",
              "tags": [
                "Node.js",
                "Task Scheduling",
                "Cron"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to integrate third-party APIs with Node.js?",
              "text": "I want to use external APIs in my Node.js application. What are the best practices for integrating third-party APIs?",
              "tags": [
                "Node.js",
                "API Integration",
                "Third-party APIs"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle environment variables in a Node.js application?",
              "text": "I need to manage environment-specific configurations in my Node.js application. What are the best practices for handling environment variables?",
              "tags": [
                "Node.js",
                "Environment Variables",
                "Configuration"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to implement WebSocket authentication in Node.js?",
              "text": "I'm using WebSocket in my Node.js application and I need to implement authentication for WebSocket connections. What are the recommended approaches?",
              "tags": [
                "Node.js",
                "WebSocket",
                "Authentication",
                "Security"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to perform database migrations in a Node.js application?",
              "text": "I need to update my database schema and data in my Node.js application. What are the best practices for performing database migrations?",
              "tags": [
                "Node.js",
                "Database",
                "Migration",
                "Knex.js"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle long-running tasks in Node.js?",
              "text": "I have some tasks in my Node.js application that take a long time to complete. What are the best practices for handling long-running tasks without blocking the event loop?",
              "tags": [
                "Node.js",
                "Concurrency",
                "Worker Threads"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            }
          ]
          
        let dataarr = [
            {
              "title": "How to handle asynchronous operations in Node.js?",
              "text": "I'm struggling to understand how to manage asynchronous tasks effectively in my Node.js application. Can someone provide some guidance or best practices?",
              "tags": [
                "Node.js",
                "Asynchronous Programming",
                "Concurrency"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to deploy a Node.js application to Heroku?",
              "text": "I've developed a Node.js application and now I want to deploy it to Heroku. Can someone provide a step-by-step guide or share any tips?",
              "tags": [
                "Node.js",
                "Heroku",
                "Deployment"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-02-13T12:00:00.000Z"),
              "modified_date": null
            },
            {
              "title": "How to handle errors in Express.js middleware?",
              "text": "I'm building a web application with Express.js and I'm not sure how to properly handle errors within my middleware functions. Any suggestions?",
              "tags": [
                "Node.js",
                "Express.js",
                "Error Handling"
              ],
              "author": "Temirlan Tazhibaev",
              "views": 0,
              "likes": 0,
              "comments": 0,
              "status": "active",
              "publish_date": new Date("2024-04-13T12:00:00.000Z"),
              "modified_date": null
            }
          ]
          
        // Вставка данных в коллекцию
        const result = await collection.insertMany(questionDataArr);
        console.log(`${result.insertedCount} document was inserted`);
  
        res.status(200).json({ message: `${result.insertedCount} document was inserted` });
    } catch (err) {
        console.error('Error inserting document:', err);
        res.status(500).json({ error: 'Error inserting document' });
    }
}
