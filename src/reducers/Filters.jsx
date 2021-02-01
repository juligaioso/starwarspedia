import {
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUES,
  REMOVE_FILTER_BY_NUMERIC_VALUES,
  ORDER_COLUMN, 
} from '../services/RequestPlanets.jsx';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export const Filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case REMOVE_FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((filter) => filter !== action.obj),
        ],
      };
    case ORDER_COLUMN:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};
