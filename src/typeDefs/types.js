const { gql } = require("apollo-server");

const types = gql`
  type User {
    id: ID!
    name: String
    age: Int
  }
  type Music {
    id: ID!
    name: String
    artist: String
    playlistIds: [ID!]
  }
  type Playlist {
    id: ID!
    name: String
    userId: ID!
  }
`;

module.exports = types;