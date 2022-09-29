const { REACT_APP_MVP_KEY } = process.env

// console.log('token', REACT_APP_MVP_KEY)

export const options = {
  method: 'get',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': REACT_APP_MVP_KEY
  }
};

export const getExercises = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}


