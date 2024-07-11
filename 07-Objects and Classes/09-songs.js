function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const n = input.shift();
    const typeToList = input.pop();

    let songs = [];
    for (let song = 0; song < n; song++) {
        const[typeList, name, time] = input[song].split('_');

        songs.push(new Song(typeList, name, time));
    }

    if (typeToList === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs
        .filter(song => song.typeList === typeToList)
        .forEach(song => console.log(song.name));
    }
}
