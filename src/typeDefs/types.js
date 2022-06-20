const { gql } = require("apollo-server");

const types = gql`
  scalar DateTime

  type User {
    id: ID!
    name: String
    age: Int
    createdAt: DateTime
    updatedAt: DateTime
  }
  type Music {
    id: ID!
    name: String
    artist: String
    playlistIds: [ID!]
    createdAt: DateTime
    updatedAt: DateTime
  }
  type Playlist {
    id: ID!
    name: String
    userId: ID!
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

module.exports = types;