const express = require("express");
const connect = require("./config/db"); 
const userController = require('./controllers/user')
const authenticate = require('./middleware/authenticate'); 
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  
  return res.send({ message: "Hello baby" });
});

app.post("/users", userController.createUser);
app.post("/login", userController.login);

// Server creation and database connection
app.listen(3001, async () => {
  try {
    await connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
});
