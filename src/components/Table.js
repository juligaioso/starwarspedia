import React from "react";
import PropTypes from "prop-types";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const tableHeaders = [
  "name",
  "climate",
  "created",
  "diameter",
  "edited",
  "films",
  "gravity",
  "orbital_period",
  "population",
  "rotation_period",
  "surface_water",
  "terrain",
  "url",
];

class Table extends React.Component {
  render() {
    const { filteredPlanet } = this.props;

    return (
      <div className="tableRow">
        <MDBTable small>
          <MDBTableHead>
            <tr>
              {tableHeaders.map((header) => (
                <th scope="col" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {filteredPlanet.map((planet) => (
              <tr key={planet.name}>
                {tableHeaders.map((header) => (
                  <td>{planet[header]}</td>
                ))}
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

Table.propTypes = {
  filteredPlanet: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  filteredPlanet: null,
};
export default Table;
