const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoute);

//get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//get product based on id

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product Not found" });
//     }

//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//create new product

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

//   res.send(req.body);
// });

//update api

// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product Not found" });
//     }

//     const updatedProduct = await Product.findById(id);

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

const connectionUri =
  "mongodb+srv://aswaniflyferry:WtMBO8os1RYSdF3r@shaperdb.7hx2uje.mongodb.net/Node-Sharper-C?retryWrites=true&w=majority&appName=ShaperDB";

mongoose
  .connect(connectionUri)
  .then(() => {
    console.log("Connected to DB");
    app.listen(4110, () => {
      console.log("server is running");
    });
  })
  .catch(() => {
    console.log("Error in Connecting Database");
  });
