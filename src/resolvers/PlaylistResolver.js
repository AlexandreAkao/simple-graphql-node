const Music = require('../models/Music');
const Playlist = require('../models/Playlist');

const PlaylistResolver = {
  Query: {
    getAllPlaylistsByUser: async (parent, args) => {
      const { id: userId } = args;
      const playlists = await Playlist.find({ userId });
  
      return playlists;
    },
  
    getAllPlaylistsByMusic: async (parent, args) => {
      const { id } = args;
      const music = await Music.findById(id);
      
      const playlists = await Playlist.find({ _id: { $in: music.playlistIds }});
  
      return playlists;
    }
  }
}

module.exports = PlaylistResolver