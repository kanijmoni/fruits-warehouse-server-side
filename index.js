
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// user:dbuser1
// password:4Vq8Dz68YRa$p2Dv


const uri = "mongodb+srv://dbuser1:4Vq8Dz68YRa$p2Dv@cluster0.3gzbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("foodExpress").collection("users");
    console.log('db connected');
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('Node ,I am listening you.')
});


app.listen(port, () => {
    console.log('listening to port', port);
})