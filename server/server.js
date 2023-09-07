const express = require("express");
const connect = require("./config/db");
const userController = require("./controllers/user");
const authenticate = require("./middleware/authenticate");
const resturant = require("./controllers/restaurant");
const category = require("./controllers/category")
const menu = require("./controllers/menu")
const app = express();

app.use(express.json());

app.get("/", authenticate, async (req, res) => {
  return res.send({ message: "Hello baby" });
});

//resturant api
app.post("/resturant", authenticate, resturant.createResturant);
app.get("/resturant", authenticate, resturant.listResturant);

app.post("/category", authenticate, category.createCategory);
app.get("/category/:restaurantId", authenticate, category.getCategoriesByRestaurant);

//menu
app.post("/menu", authenticate, menu.createItem);


//user
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
