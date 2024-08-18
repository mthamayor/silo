import express from "express";

const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.send({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Example apps listening on port ${port}`);
});
