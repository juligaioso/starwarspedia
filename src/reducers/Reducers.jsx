import { combineReducers } from 'redux';
import { GetPlanets } from './GetPlanets';
import { Filters } from './Filters';

export const Reducer = combineReducers({ GetPlanets, Filters });
