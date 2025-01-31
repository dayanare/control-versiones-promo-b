const getDataApi = (search) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  )
    .then((res) => res.json())
    .then((data) => {
      //verificar si drinks es una array
      console.log(Array.isArray(data.drinks));

      const cleanData = data.drinks.map((item) => {
        return {
          id: item.idDrink,
          name: item.strDrink,
          category: item.strCategory,
          image: item.strDrinkThumb,
        };
      });
      return cleanData;
    });
};

export default getDataApi;
