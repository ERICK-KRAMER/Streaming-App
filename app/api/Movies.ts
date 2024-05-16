class Movies {
  
  private readonly token = process.env.TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmI2NTVjOTFhYjI5NTNjNzMzMmY1OTIxY2MxNTA4NCIsInN1YiI6IjY1MjFmMjI0YzFmZmJkMDBhYzU2NTdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjpbTZUU4XHNmAI_rd7IEaiWKgE7HzSz4nrYo5xpMCk';

  async GetAllMovie () {
    try {
      
      const request = await fetch('https://api.themoviedb.org/3/movie/now_playing', {
      method: 'GET',
      headers : {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
    });
      
      const data = request.json();

      return data;

    } catch (error) {
      console.log(error);
    }  
  }
}

const Movie = new Movies;

export { Movie };