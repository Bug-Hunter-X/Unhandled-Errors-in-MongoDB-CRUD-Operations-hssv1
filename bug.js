```javascript
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('users');
    // Insert a single document
    const doc = { name: 'John Doe', age: 30 };
    const result = await collection.insertOne(doc);
    console.log(`Inserted ${result.insertedCount} document with id ${result.insertedId}`);
    // Insert many documents
    const docs = [{
      name: 'Jane Doe',
      age: 25
    }, {
      name: 'Peter Pan',
      age: 20
    }];
    const result2 = await collection.insertMany(docs);
    console.log(`Inserted ${result2.insertedCount} documents with ids ${result2.insertedIds}`);
    // Find a document
    const query = { name: 'John Doe' };
    const user = await collection.findOne(query);
    console.log('Found user:', user);
    // Find all documents
    const users = await collection.find({}).toArray();
    console.log('Found users:', users);
    // Update a document
    const update = { $set: { age: 31 } };
    const result3 = await collection.updateOne(query, update);
    console.log(`Updated ${result3.modifiedCount} documents`);
    // Delete a document
    const result4 = await collection.deleteOne(query);
    console.log(`Deleted ${result4.deletedCount} documents`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```