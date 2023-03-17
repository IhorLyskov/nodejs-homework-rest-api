const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://IhorLyskov:UhHLwFhT0tmHZYQh@cluster0.frrpeei.mongodb.net/contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
