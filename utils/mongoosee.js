import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://jsm:jsm1998@cluster0.sbzbxhb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
export async function connectToDB() {
  try {
      await client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      
      
  });
    console.log("MongoDB Connected")
  } catch (error) {
    console.error(erros)
  }
  
}