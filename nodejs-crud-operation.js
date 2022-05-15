```
  /**
     * API Naming Convention
     * app.get('/booking') // get all bookings in this collection. or get more than one or by filter
     * app.get('/booking/:id') // get a specific booking 
     * app.post('/booking') // add a new booking
     * app.patch('/booking/:id) //
     * app.delete('/booking/:id) //
    */
```




//update,post,delete,load data

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

// use middleware
app.use(cors());
app.use(express.json()); //body pars than data show

// username:hamid42
// password:SktUkEqKFMX5qden

const uri =
  "mongodb+srv://hamid42:SktUkEqKFMX5qden@cluster0.1geox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("users");

    // database to server-side / get user
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      const users = await cursor.limit(10).toArray();//limit data show
      res.send(users);
    });
    

    //update user id pass
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    // POST USER: add a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
      // res.send({result:"success"});
    });

    //update user 
    app.put("/user/:id", async (req, res) => {
      const id = req.params.id;
      const updateUser=reg.body;
      const filter = { _id: ObjectId(id) };
      const options={upsert:true};
      const updateDoc={
          $set:{
              name:updateUser.name,
              email:updateUser.email
          }
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete a user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // const user={name:"Hamid Hosen",email:"hamidhosen@gmail.com"};
    // const result=await userCollection.insertOne(user);
    // console.log(`User inserted with id: ${result.insertedId}`);
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

// client.connect((err) => {
//   const collection = client.db("foodExpress").collection("users");
//   // perform actions on the collection object
//   console.log("connect");
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("Running My Node CRUD Server");
});

app.listen(port, () => {
  console.log("CRUD Server is running");
});
