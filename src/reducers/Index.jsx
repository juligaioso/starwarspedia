import { combineReducers } from 'redux';
import { GetPlanets } from './GetPlanets';
import { Filters } from './filters';

export const Reducer = combineReducers({ GetPlanets, Filters });
