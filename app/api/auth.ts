const url = 'https://api.themoviedb.org/3/movie/';

const token = process.env.TOKEN;

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

const Auth = async ({ endpoint }: AuthProps) => {
  try {
    const response = await fetch(endpoint, option);
    
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }

    const data = await response.json();

    return data;

  } catch (error) {
    
    console.error('Erro na requisição:', error);
    
    throw error;
  }
};


export { Auth };