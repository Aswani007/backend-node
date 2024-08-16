import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log(`server running at port http://localhost:${8000}`);
    });
  })
  .catch((error) => {
    console.log(`Mongodb Error ${error}`);
  });
