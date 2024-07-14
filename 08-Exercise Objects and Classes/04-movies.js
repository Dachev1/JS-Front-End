function movies(input) {
    let movies = [];
    
    const commandAdd = 'addMovie';
    const commandDirector = 'directedBy';
    const commandDate = 'onDate';
    
    for (const line of input) {
        if (line.includes(commandAdd)) {
            const movieName = line.slice(commandAdd.length + 1);
            
            movies.push({
                name: movieName,
            })
        }
        
        if (line.includes(commandDirector)) {
            const[movieName, director] = line.split(` ${commandDirector} `);
            const isTheMovieExists = movies.find(movie => movie.name === movieName);
            
            if (isTheMovieExists) {
                isTheMovieExists.director = director;
            }
        }
        
        if (line.includes(commandDate)) {
            const[movieName, date] = line.split(` ${commandDate} `);
            const isTheMovieExists = movies.find(movie => movie.name === movieName);
            
            if (isTheMovieExists) {
                isTheMovieExists.date = date;
            }
        }
    }
    
    movies
    .filter(movie => movie.director && movie.date)
    .map(movie => JSON.stringify(movie))
    .forEach(movie => console.log(movie));
}
