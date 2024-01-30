import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLScalarType, buildSchema } from 'graphql';
import root from './helpers/resolver.js';
import schema from './helpers/schema.js';
import { DatabaseStart } from './models/index.js';
import newsRouter from './routes/news.router.js';
// const schema = buildSchema(`
//   scalar Date
//   type Category {
//     id: String
//     name: String!
//     createdAt: Date
//     updatedAt: Date
//   }

//   type Picture {
//     id: String
//     path: String!
//     type: String!
//     createdAt: Date
//     updatedAt: Date
//   }

//   type React {
//     id: String
//     type: String!
//     news_id: String!
//     createdAt: Date
//     updatedAt: Date
//   }

//   type News {
//     id: String
//     title: String!
//     content: String!
//     category_id: String!
//     country_code: String!
//     createdAt: Date
//     updatedAt: Date
//     picture: [Picture]
//     react: [React]
//   }

//   type Query {
//     getNews(id: String!): News
//     getNewses: [News]
//     getNewsByCountryCode(code: String!): [News]
//     getCategories: [Category]
//     getReacts(news_id: String!): [React]
//   }

//   type Mutation {
//     createReact(type: String!, news_id: String!): React
//   }
// `);

// const Newss = [
//   {
//     id: "",
//     title: "",
//     content: "",
//     category_id: "",
//     country_code: "",
//     createdAt: "",
//     updatedAt: "",
//     picture: [],
//     react: []
//   },
//   {
//     id: "",
//     title: "",
//     content: "",
//     category_id: "",
//     country_code: "",
//     createdAt: "",
//     updatedAt: "",
//     picture: [],
//     react: []
//   }
// ];

// const root = {
//   getNews: async ({ id }) => {
//     return Newss[0];
//   },
//   getNewses: async () => {
//     return Newss;
//   },
//   getNewsByCountryCode: async ({ code }) => {
//     return Newss;
//   },
//   getCategories: async () => {
//     return [];
//   },
//   getReacts: async ({ news_id }) => {
//     return [];
//   },
//   createReact: ({ type, news_id }) => {
//     return null;
//   }
// };

DatabaseStart();
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.use("/news",newsRouter);
app.use((error, request, response, next) => {
    response.status(500).json(error);
  
});
app.listen(3000, () => {
  console.log('GraphQL server is running on http://localhost:3000/graphql');
});








