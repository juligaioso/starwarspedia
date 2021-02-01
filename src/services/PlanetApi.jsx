const api = "https://swapi-trybe.herokuapp.com/api/planets/";

export const Planets = () =>
  fetch(api).then((json) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
