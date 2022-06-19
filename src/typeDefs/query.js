const { gql } = require("apollo-server");

const query = gql`
  type Query {
    getAllUsers: [User]
    getAllMusics: [Music]
    GetAllMusicsByPlaylist(id: ID!): [Music]
    getAllPlaylistsByUser(id: ID!): [Playlist]
    getAllPlaylistsByMusic(id: ID!): [Playlist]
  }
`;

module.exports = query;