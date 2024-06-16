const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Uncomment the root route if needed
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
