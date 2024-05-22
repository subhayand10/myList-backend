import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import myListRoutes from "./routes/myListRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/mylist", myListRoutes);

mongoose
  .connect(
    "mongodb+srv://subhayansd10:SUBHAYAN2001@cluster0.pg28axs.mongodb.net/myListDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDb");
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
