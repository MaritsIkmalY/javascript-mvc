const Playlist = require('../models/Playslist');
const View = require('../views/View');

class PlaylistController{
    static add(params){
        Playlist.add(params);
    }

    static remove(params){
        Playlist.remove(params);
    } 

    static show(){
        View.show(Playlist.show());
    }

    static make(params){
        Playlist.make(params);
    }
}

module.exports = PlaylistController;