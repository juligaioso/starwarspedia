export const filterFunction = (planets, name, numericValues) => (numericValues.length === 0
  ? planets.filter((planet) => planet.name.includes(name))
  : numericValues.reduce(
    (acc, { column, comparison, value }) => acc.filter((planet) => {
      switch (comparison) {
        case 'major':
          return planet.name.includes(name) && parseFloat(planet[column]) > parseFloat(value);
        case 'minor':
          return planet.name.includes(name) && parseFloat(planet[column]) < parseFloat(value);
        case 'equal':
          return (
            planet.name.includes(name) && parseFloat(planet[column]) === parseFloat(value)
          );
        default:
          return planet.name.includes(name);
      }
    }),
    planets,
  ));

