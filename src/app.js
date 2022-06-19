const mongoose = require('mongoose');
const { ApolloServer } = require("apollo-server");

const userResolver = require('./resolvers/UserResolver');
const musicResolver = require('./resolvers/MusicResolver');
const playlistResolver = require('./resolvers/PlaylistResolver');
const typeDefs = require('./typeDefs');

class App {
  constructor() {
    this.database();
    this.server = new ApolloServer({ 
      typeDefs,
      resolvers: [userResolver, musicResolver, playlistResolver] 
    });
  }

  database() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL)

    mongoose.connection.on('error', (err) => console.log(`connection error: ${err}`));
    mongoose.connection.on('disconnected', () => console.log('Application desconnected to database'));
    mongoose.connection.on('connected', () => console.log('Application connected to database'));
  }
}

module.exports = new App().server;