import _ from 'lodash';
import React from 'react';
import { createTable, validateTable } from './utils';

class SudokuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(itemKey, event) {
    console.log('clicked');
    console.log(itemKey);
    this.setState({
      activeKey: itemKey
    });
  }

  tableTemplate(table, isValid = false) {
    return table.map((row, rowIndex) => {
      return (
        <tr className="sudoku-row" key={`row-${rowIndex}`}>
        {
          row.map((cell, cellIndex) => {
            const rightBorderClass = (cellIndex === 2 || cellIndex === 5) ? 'sudoku-border-right' : '';
            const bottomBorderClass = (rowIndex === 2 || rowIndex === 5) ? 'sudoku-border-bottom' : '';
            const validClass = isValid ? '' : 'invalid';
            const cellKey = `row-${rowIndex}-cell-${cellIndex}`;
            const isSelected = this.state.activeKey === cellKey ? 'selected' : '';
            const classList = [rightBorderClass, bottomBorderClass, validClass, isSelected].join(' ');
            const boundClickHandler = this.clickHandler.bind(this, cellKey);

            return (
              <td
                className={`sudoku-cell ${classList}`}
                data-row={rowIndex}
                data-column={cellIndex}
                key={cellKey}
                onClick={boundClickHandler}
              >
                {typeof cell === 'number' ? cell : '-'}
              </td>
            );
          })
        }
        </tr>
      );
    });
  }

  renderTable() {
    const table = createTable();
    const isValid = validateTable(table);
    return this.tableTemplate(table, isValid);
  }

  render() {
    return (
      <div>
        <h1>Sudoku - React</h1>
        <table>
          <tbody>
            {this.renderTable()}
          </tbody>
        </ table>
      </div>
    );
  }
};

export default SudokuContainer;
