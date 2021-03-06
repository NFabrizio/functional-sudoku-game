import _ from 'lodash';

const createRow = () => _.times(9, _.constant('-'));
export const createTable = () => _.times(9, createRow);

const createRow2 = x => _.map(_.range(9), y => `${x}-${y}`);
const createTable2 = () => _.map(_.range(9), createRow2);

const getRow = (table, row) => table[row];
const getColumn = (table, columnIndex) => _.map(table, row => row[columnIndex]);

const getArea = (table, x, y) => {
  const rows = [table[3 * y], table[3 * y + 1], table[3 * y + 2]];
  return _.flatMap(rows, row => row.slice(3 * x, 3 * x + 3));
};
const getAllAreas = table => {
  return _(3).range().flatMap(x => {
    return _(3).range().map(y => {
      return getArea(table, x, y);
    }).value();
  }).value();
};
const getMainDiag = table => _.map(table, (row, index) => row[index]);
const getBackDiag = table => _.map(table, (row, index) => row[8 - index]);

const getAllConstraints = table => {
  const rows = table;
  const columns = _.range(9).map(_.partial(getColumn, table));
  const areas = getAllAreas(table);
  const diags = [getMainDiag(table), getBackDiag(table)];

  return [
    ...rows,
    ...columns,
    ...areas,
    ...diags
  ];
};

const allDistinct = values => {
  const filteredValues = _.filter(values, x => typeof x === 'number');
  return _.uniq(filteredValues).length === filteredValues.length;
};

const allDistinctList = constraintList => {
  return _.reduce(constraintList, (acc, values) => acc && allDistinct(values), true);
};

export const validateTable = table => {
  return allDistinctList(getAllConstraints(table));
};

export const setCell = (table, rowIndex, columnIndex, value) => {
  const newTable = _.cloneDeep(table);

  newTable[rowIndex][columnIndex] = value;

  return newTable;
};

// console.log(getAllConstraints(createTable2()));
