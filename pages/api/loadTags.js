import { connectToDatabase } from '@/db.js';

export default async function handler(req, res) {  
    try {
        const db = await connectToDatabase();
        const collection = db.collection('Tags');
  
        // Создание уникального индекса для поля "name"
        await collection.createIndex({ name: 1 }, { unique: true });
  
        const tags = [
            {
                "name": "python",
                "description": "Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags."
            },
            {
                "name": "java",
                "description": "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers."
            },
            {
                "name": "javascript",
                "description": "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc."
            },
            {
                "name": "c#",
                "description": `C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others. Use this tag for questions about code written in C# or about C#'s formal specification.`
            },
            {
                "name": "PHP",
                "description": "PHP is an open-source, multi-paradigm, dynamically-typed, and interpreted scripting language designed initially for server-side web development. Use this tag for questions about programming in the PHP language."
            },
            {
                "name": "c++",
                "description": "C++ is a general-purpose programming language. Use this tag for questions about/utilizing C++. Do not also tag questions with [c] unless you have a good reason. C and C++ are different languages. Use a versioned tag such as [c++11], [c++20] etc. for questions specific to a standard revision."
            },
            {
                "name": "html",
                "description": "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with CSS and JavaScript."
            },
            {
                "name": "jquery",
                "description": "jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations, and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jQuery should be related to jQuery, so jQuery should be used by the code in question, and at least jQuery usage-related elements must be in the question. Consider also adding the JavaScript tag."
            },
            {
                "name": "css",
                "description": "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media."
            },
            {
                "name": "sql",
                "description": "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMS's tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL."
            },
            {
                "name": "mysql",
                "description": "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data. Always specify the exact version of the server in the question. Versions 5.x differ greatly in their capabilities from versions 8+."
            },
            {
                "name": "reactjs",
                "description": "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
            },
            {
                "name": "node.js",
                "description": "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching."
            },
            {
                "name": "c",
                "description": "C is a general-purpose programming language used for system programming (OS and embedded), libraries, games and cross-platform. This tag should be used with general questions concerning the C language, as defined in the ISO 9899 standard (the latest version, 9899:2018, unless otherwise specified — also tag version-specific requests with c89, c99, c11, etc). C is distinct from C++ and it should not be combined with the C++ tag without a specific reason."
            },
            {
                "name": "json",
                "description": "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. Do not use this tag for native JavaScript objects or JavaScript object literals. Before you ask a question, validate your JSON using a JSON validator such as JSONLint (https://jsonlint.com)."
            },
            {
                "name": "django",
                "description": "Django is an open-source server-side web application framework written in Python. It is designed to reduce the effort required to create complex data-driven websites and web applications, with a special focus on less code, no-redundancy and being more explicit than implicit."
            },
        ];
  
        const result = await collection.insertMany(tags);
        console.log(`${result.insertedCount} documents were inserted`);
  
        res.status(200).json({ message: `${result.insertedCount} documents were inserted` });
    } catch (err) {
        console.error('Error inserting documents:', err);
        res.status(500).json({ error: 'Error inserting documents, ' + err });
    }
}
