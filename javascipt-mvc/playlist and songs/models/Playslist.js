const fs = require('fs');
const {Alternative, Rock} = require('./Song');

class Playslist{
    constructor(id, name, songs){
        this.id = id;
        this.name = name;
        this.songs = songs || [];
    }

    static getPlaylist(){
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        let playlist = data.map(pl => {
            let {id, name, songs} = pl;
            songs = songs.map(sg => {
                const {id, name, duration, genre} = sg;
                if(genre === "Alternative")
                    return new Alternative(id, name, duration);
                return new Rock(id, name, duration);
            });
            return new Playslist(id, name, songs);
        });
        return playlist;
    }

    static show(){
        return this.getPlaylist();
    }

    static add(params){
        let playlist = this.getPlaylist();
        const [songName, genre, duration, playlistName] = params;
        playlist.forEach(pl => {
            if(pl.name === playlistName){
                let id = 1;
                if(pl.songs.length !== 0)
                    id = pl.songs[pl.songs.length - 1].id + 1;
                if([genre === "Alternative"])
                    pl.songs.push(new Alternative(id, songName, Number(duration)));
                else
                    pl.songs.push(new Rock(id, songName, Number(duration)));
            }
        });
        this.save(playlist);
    }

    static remove(params){
        let playlist = this.getPlaylist();
        const [songName, playlistName] = params;
        playlist = playlist.map(pl => {
            if(pl.name === playlistName){
                pl.songs = pl.songs.filter(song => song.name !== songName);
            }
            return pl;
        });
        this.save(playlist);
    }

    static make(params){
        let playlist = this.getPlaylist();
        const [playlistName] = params;
        let id = playlist[playlist.length-1].id + 1;
        playlist.push(new Playslist(id, playlistName));
        this.save(playlist);
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }
}

module.exports = Playslist;