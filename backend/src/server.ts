import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

const users = [
  {
    id: 1,
    name: "Simon Smith",
    profession: "Software Engineer",
    location: "London",
  },
  {
    id: 2,
    name: "David Cameron",
    profession: "Politician",
    location: "New York",
  },
];

const products = [
  {
    id: 1,
    name: "Canon E500",
    brand: "Canon",
    type: "camera",
  },
  {
    id: 2,
    name: "Nike Phantom 100",
    brand: "Nike",
    type: "shoes",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
