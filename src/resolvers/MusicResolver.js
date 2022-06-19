const Music = require('../models/Music');

const MusicResolver = {
  Query: {
    getAllMusics: async () => {
      const musics = await Music.find();
  
      return musics;
    },
  
    GetAllMusicsByPlaylist: async (parent, args) => {
      const { id } = args;
      const musics = await Music.find({ playlistIds: { $in: id }});
  
      return musics;
    }
  }
}

module.exports = MusicResolver