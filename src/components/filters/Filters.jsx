import React from 'react';
import { FilterByName } from './FilterByName';
import { FilterByValues } from './FilterByValues';
import { FilterOrder } from './FilterOrder';
import { RemoveFilter } from './RemoveFilters';

export function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByValues />
      <FilterOrder />
      <RemoveFilter />
    </div>
  );
}
