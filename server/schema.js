import { makeExecutableSchema } from 'graphql-tools';
import schemaDef from './schema-def';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs: schemaDef,
  resolvers,
});

export default schema;
