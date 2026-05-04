const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri =
  "mongodb+srv://smartDBuser:yB5ALHvar9KXlqEp@cluster0.hr3iszz.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let productsCollection;

// Root route
app.get("/", (req, res) => {
  res.send("smart deals server running");
});

async function run() {
  try {
    await client.connect();

    const db = client.db("smart_DB");
    const productsCollection = db.collection("products");
    const bidsCollection = db.collection("bids");
    const userCollection = db.collection("users");

    // users related api

    // post user
    app.post("/users", async (req, res) => {
      const newUser = req.body;

      const email = req.body.email;
      const query = { email: email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        res.send({ message: "User already exists" });
      } else {
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      }
    });

    // get a user details

    // products apis

    // POST: add product
    app.post("/products", async (req, res) => {
      try {
        const newProduct = req.body;
        const result = await productsCollection.insertOne(newProduct);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to insert product" });
      }
    });

    // delete product
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    // update product
    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedProduct = req.body;
      const update = {
        $set: {
          name: updatedProduct.name,
          price: updatedProduct.price,
        },
      };
      const options = {};
      const result = await productsCollection.updateOne(query, update, options);
      res.send(result);
    });

    // get all products
    app.get("/products", async (req, res) => {
      // const projectField = {title : 1, price_min: 1, price_max: 1, image: 1};
      // const cursor = productsCollection.find().sort({price_min: 1}).project(projectField);

      console.log(req.query);
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }

      const cursor = productsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // get latest products
    app.get("/latest-products", async (req, res) => {
      const cursor = productsCollection
        .find()
        .sort({
          created_at: -1,
        })
        .limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    // get single product
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });

    // bids related api

    // get all bids
    app.get("/bids", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.buyer_email = email;
      }
      const cursor = bidsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/bids/:id", async (req, res) => {
      try {
        const productId = req.params.id;

        const query = {
          product: productId,
        };

        const result = await bidsCollection
          .find(query)
          .sort({ bid_price: -1 }) // highest bid first
          .toArray();

        res.send(result);
      } catch (error) {
        res.status(500).send({
          error: "Failed to get bids",
        });
      }
    });

    // post a bid
    app.post("/bids", async (req, res) => {
      const newBid = req.body;
      const result = await bidsCollection.insertOne(newBid);
      res.send(result);
    });

    // delete a bid
    app.delete("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidsCollection.deleteOne(query);
      res.send(result);
    });

    // get a single bid
    app.get("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidsCollection.findOne(query);
      res.send(result);
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

run();

// Start server
app.listen(port, () => {
  console.log(`Smart server running at: http://localhost:${port}`);
});
