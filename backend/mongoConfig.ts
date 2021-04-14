import { MongoClient } from 'mongodb';

export default async function connectMongoDb() {
  try {
    const url = 'mongodb://localhost:27017/BookStore';
    const mongo = await MongoClient.connect(url, {
      useNewUrlParser: true,
    });

    return mongo.db();
  } catch (error) {
    console.log('Is not possible connect to mongodb', error);
  }
}
