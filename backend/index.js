import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergeResolver from "./resolvers/index.js"
import mergeTypeDef from "./typeDefs/index.js";

dotenv.config();
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: mergeTypeDef,
  resolvers: mergeResolver,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

// Setup an express middleware, handle cors and body parser
// an Apollo server instances and optional configuration options
app.use(
  "/",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  })
)

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000/`);
