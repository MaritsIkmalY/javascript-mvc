class Song{
    constructor(id, name, duration){
        this.id = id;
        this.name = name;
        this.duration = duration;
    }
}

class Alternative extends Song{
    constructor(id, name, duration){
        super(id, name, duration);
        this.genre = "Alternative";
    }
}

class Rock extends Song{
    constructor(id, name, duration){
        super(id, name, duration);
        this.genre = "Rock";
    }
}

module.exports = {
    Alternative, Rock
};