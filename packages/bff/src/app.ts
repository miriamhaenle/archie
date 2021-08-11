import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running." });
});

app.listen(3000, () => console.log("Sever listens on port 3000."));
