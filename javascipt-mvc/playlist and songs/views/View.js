class View{
    static show(playlist){
        playlist.forEach(pl => {
            let {id, name, songs} = pl;
            console.log(`${id}. ${name}`);
            songs.forEach(song => {
                const {name, duration, genre} = song;
                console.log(`${name} | ${duration} | ${genre}`);    
            });
        });
    }
}
module.exports = View;