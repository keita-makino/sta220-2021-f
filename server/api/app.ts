import { ApolloServer } from "apollo-server-express";
import express, { json } from "express";
import { schema } from "./schema";
import { createContext } from "./context";
import axios from "axios";
import cors from "cors";
import { kmeans } from "./kmeans";

require("dotenv").config();
const apollo = new ApolloServer({ schema, context: createContext });
const app = express();

apollo.applyMiddleware({ app });

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/kmeans", kmeans);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is ready.`);
});
