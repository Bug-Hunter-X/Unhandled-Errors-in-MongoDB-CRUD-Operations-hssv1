```javascript
const { MongoClient } = require('mongodb');
const uri = "YOUR_MONGODB_URI"; // Replace with your connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('users');

    // Insert a single document
    const doc = { name: 'John Doe', age: 30 };
    const insertResult = await collection.insertOne(doc);
    if (insertResult.acknowledged) {
      console.log(`Inserted ${insertResult.insertedCount} document with id ${insertResult.insertedId}`);
    } else {
      console.error('Failed to insert document:', insertResult);
    }

    // ... (other operations similarly wrapped with error handling) ...
  } catch (err) {
    console.error('Error during MongoDB operations:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```