
class TableHeaderContext {
  constructor(cellContexts, sortContext, isSencitiveSearch) {
    this.cellContexts = cellContexts; // type: array of TableHeaderCell classes
    this.sortContext = sortContext;   // type: TableSortContext
    this.isSencitiveSearch = isSencitiveSearch;  // type: bool
  }
}

class TableHeaderCellContext {
  constructor(name, caption, cssClassList) {
    this.name = name;
    this.caption = caption;
    this.cssClassList = cssClassList;
  }
}

class TableSortContext {
  constructor(iLatestClickedCell, iClickedCells) {
    this.iLatestClickedCell = iLatestClickedCell;
    this.iClickedCells = iClickedCells;
  }
}

class TableDataRowsContext {
  constructor(iSupportiveRow) {
    this.iSupportiveRow = iSupportiveRow;
  }
}
