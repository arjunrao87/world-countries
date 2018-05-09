import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { ApolloEngine } from 'apollo-engine';
import { graphqlExpress } from 'apollo-server-express';
import playground from 'graphql-playground-middleware-express';
import schema from './schema';

require('dotenv').config();

// ////////////////////////// SERVER EXECUTION /////////////////////////

const app = express();

// Declare routes
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true,
}));
app.get('/playground', playground({ endpoint: '/graphql' }));

// Instantiate Apollo Engine
const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
});

// Run the server!
engine.listen({
  port: process.env.PORT || 3000,
  expressApp: app,
});
