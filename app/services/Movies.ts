class Movie {

  private token = process.env.TOKEN;

  private movie = 'https://api.themoviedb.org/3/movie';

  private search = 'https://api.themoviedb.org/3/search';

  private person = 'https://api.themoviedb.org/3/person/';

  private tv = 'https://api.themoviedb.org/3/trending/tv'

  private option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
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

  async Tv({ day, page }: { day: string, page: number }) {
    try {
      const response = await fetch(`${this.tv}/${day}?language=pt-BR&page=${page}`, this.option);

      const data = await response.json();

      return data;

    } catch (error) {

      console.log(error);

    }
  }

  async AllPeople() {
    try {
      const response = await fetch(`${this.person}/popular`, this.option);

      const data = await response.json();

      return data;

    } catch (error) {

      console.log(error);

    }
  }

}

const API = new Movie;

export { API };
