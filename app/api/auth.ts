const token = process.env.TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmI2NTVjOTFhYjI5NTNjNzMzMmY1OTIxY2MxNTA4NCIsInN1YiI6IjY1MjFmMjI0YzFmZmJkMDBhYzU2NTdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjpbTZUU4XHNmAI_rd7IEaiWKgE7HzSz4nrYo5xpMCk'

const option = {
  method: 'GET',
  headers : {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
};

export interface AuthProps {
  endpoint: string;
}

const ApiMovies = async ({ endpoint }: AuthProps) => {
  try {
    const response = await fetch(endpoint, option);
    
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }

    const data = await response.json();

    console.log(data);

    return data;

  } catch (error) {
    
    console.error('Erro na requisição:', error);
    
    throw error;
  }
};


export { ApiMovies };