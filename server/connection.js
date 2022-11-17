import { MongoClient } from "mongodb";

// const uri = "mongodb://192.168.0.222:27017/?maxPoolSize=200";
//const uri = "mongodb://Whyang:yang.123@ac-ko32zar-shard-00-00.rvgzebf.mongodb.net:27017,ac-ko32zar-shard-00-01.rvgzebf.mongodb.net:27017,ac-ko32zar-shard-00-02.rvgzebf.mongodb.net:27017/?ssl=true&replicaSet=atlas-ks5ps0-shard-0&authSource=admin&retryWrites=true&w=majority";

function MyMongoDB() {
  const myDB = {};
  const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
  const DB_NAME = "twitter";
  const DON_COL_NAME = " ";

  myDB.getCollection = async function (){
    let client;
    console.log("get tweet");
    try {
      const client = new MongoClient(uri);

      // handle errors
      client.db(DB_NAME)

    } catch (e) {
      console.log("error", e);
      throw e;
    } finally {
      console.log("close connection");
      await client.close();
    }
  };
  return myDB;
}

//  client.connect().then(() => {
//    console.log("connected db");
// });

//  function getDB() {
//    return client.db("twitter");
//  }
//}

//module.exports = { getDB };
export const myDB = MyMongoDB();