const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./controllers/PlaylistController');

if(command === 'add'){
    PlaylistController.add(params);
}else if(command === 'remove'){
    PlaylistController.remove(params);
}else if(command === 'make'){
    PlaylistController.make(params);
}else if(command === 'show-playlist'){
    PlaylistController.show();
}else{
    console.log("Inputkan yang benar");
}