import _ from 'lodash';
import React from 'react';
import { createTable } from './utils';

class SudokuContainer extends React.Component {
  templateString() {
    return _.each(table, (row, rowIndex) => {
      return (
        <tr class="sudoku-row">
        {
          _.each(row, (cell, cellIndex) => {
            const rightBorderClass = (cellIndex === 2 || cellIndex === 5) ? 'sudoku-border-right' : '';
            const bottomBorderClass = (rowIndex === 2 || rowIndex === 5) ? 'sudoku-border-bottom' : '';
            const validClass = isValid ? '' : 'invalid';
            const classList = [rightBorderClass, bottomBorderClass, validClass].join(' ');

            return (
              <td class="sudoku-cell js-sudoku-cell <%= classList %>"
                data-row="<%= rowIndex %>"
                data-column="<%= cellIndex %>">
                typeof cell === 'number' ? cell : '-'
              </td>
            );
          })
        }
        </tr>
      );
    });
  }

  tableTemplate() {
    _.template(this.templateString);
  }

  renderTable() {
    const table = createTable();
    return this.tableTemplate({table});
  }

  render() {
    return (
      <div>
        <h1>Sudoku - React</h1>
        {this.renderTable()}
      </div>
    );
  }
};

export default SudokuContainer;
