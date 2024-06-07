class Movie {

  private token = process.env.TOKEN;

  private movie = 'https://api.themoviedb.org/3/movie';

  private search = 'https://api.themoviedb.org/3/search';

  private person = 'https://api.themoviedb.org/3/person';

  private colection = 'https://api.themoviedb.org/3/collection';

  private option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmI2NTVjOTFhYjI5NTNjNzMzMmY1OTIxY2MxNTA4NCIsInN1YiI6IjY1MjFmMjI0YzFmZmJkMDBhYzU2NTdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjpbTZUU4XHNmAI_rd7IEaiWKgE7HzSz4nrYo5xpMCk`
    }
  };

  async Movies({ page = 1 }: { page?: number }) {
    try {
      const response = await fetch(`${this.movie}/now_playing?language=pt-BR&page=${page}`, this.option);

      const data = await response.json();

      return data;

    } catch (error) {

      console.log(error);

    }
  }



  async Search({ page = 1, type = 'movie', name = 'harry potter' }: { page?: number, type?: string, name: string }) {
    try {
      const nameRegex = name.trim().replace(/ /g, "%20");

      const response = await fetch(`${this.search}/${type}?query=${nameRegex}&language=pt-BR&page=${page}`, this.option);

      const data = await response.json();

      return data;

    } catch (error) {

      console.log(error);

    }
  }


  // async Colection() {
  //   try {
  //     const response = await fetch(`${this.colection}/`, this.option);

  //     const data = await response.json();

  //     return data;

  //   } catch (error) {

  //     console.log(error);

  //   }
  // }

}

const API = new Movie;

export { API };
