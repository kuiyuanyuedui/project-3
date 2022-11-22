const {MongoClient} = require("mongodb");

const uri = "mongodb://localhost/?maxPoolSize=200";

const client = new MongoClient(uri);
client.connect().then(() => {
  console.log("connected db")
})

function getDB() {
  return client.db("twitter")
}

module.exports = {getDB}
