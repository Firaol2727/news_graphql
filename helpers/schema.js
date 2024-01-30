// import pkg from 'graphql';
import { GraphQLScalarType, buildSchema } from 'graphql';
// import  { BuildSchemaOptions,GraphQLScalarType,buildSchema } from "graphql";
const dateScalarResolver  ={
  Date: new  GraphQLScalarType({
    name:'Date',
    description:"Date custom scalar type",
    parseValue(value){
      return new Date(value)
    },
    serialize(value){
      return value.toISOString();
    },
    parseLiteral(ast){
      if(ast.kind=== "STRING"){
        //convert to date
        return new Date(ast.value);
      }
      return null ; // invalid input
    }
  })
}
const schema = buildSchema(`
  scalar Date
  type Category {
    id: String
    name: String!
    createdAt: Date
    updatedAt: Date
  }

  type Picture {
    id: String
    path: String!
    type: String!
    createdAt: Date
    updatedAt: Date
  }

  type React {
    id: String
    type: String!
    news_id: String!
    createdAt: Date
    updatedAt: Date
  }

  type News {
    id: String
    title: String!
    content: String!
    category_id: String!
    country_code: String!
    createdAt: Date
    updatedAt: Date
    Pictures: [Picture]
    react: [React]
  }

  type Query {
    getNews(id: String!): News
    getNewses: [News]
    getNewsByCountryCode(code: String!): [News]
    getCategories: [Category]
    getReacts(news_id: String!): [React]
  }

  type Mutation {
    createReact(type: String!, news_id: String!): React
  }
`);

export default schema