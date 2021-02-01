import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';


export default function Table() {
  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}