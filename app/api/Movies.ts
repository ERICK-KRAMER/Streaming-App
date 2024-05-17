class Movies {
  
  private readonly token = process.env.TOKEN;

  private option = {
    method: 'GET',
    headers : {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    },
  }

  async GetAllMovie ({page}: { page: number }) {
    try {
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, {
        method: 'GET',
        headers : {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
      });
      
      const data = response.json();

      return data;

    } catch (error) {
      console.log(error);
    }  
  }

  async GetGenres () {
    try { 

      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
        method: 'GET',
        headers : {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = response.json();

      return data;
      
    } catch (error) {
      console.log(error);
    }
  }

  async GetMovieByName ({name}:{ name : string }) {
    try {

      const formattedName = name.replace(/\s/g, '%20');
      
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${formattedName}&include_adult=false&language=pt-BR&page=1`, {
        method: 'GET',
        headers : {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }
  
}

const Movie = new Movies;

export { Movie };