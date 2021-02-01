import { filterComparison } from './filterFunction';

const orderName = (array) =>
  array.sort(function (a, b) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  });

const orderDesc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = filterComparison(planets, name, numericValues);
    return orderName(filter);
  }
  return filterComparison(planets, name, numericValues).sort(
    (a, b) => b[columnSort] - a[columnSort],
  );
};

export default orderDesc;