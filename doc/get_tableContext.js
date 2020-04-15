function get_tableContext() {    
    let markup = `
    <h3>Issue. Table Context.</h3>
    <p>We need to store information about the table as a whole - the number of columns, column names, and so on.
    We also need to store information about the state of the table - the current table style,
    dynamic sorting filter, active icons, and the like. To this end, we add couple classes to the project
    to store this information. We will call this information the context of the table
    and the corresponding classes — the Table Context classes:</p>
    <ul>
    <li>TableHeaderContext class </a>
    <li>TableHeaderCellContext class </a>
    <li>TableSortContext class </a>
    <li>TableDataRowsContext class </a>
    </li>
    </ul>
    
    <h4>Code.</p>
    <h5><strong>Keywords: </strong></h5>                
    
    <h5>1.1. Table Context Classes definition.</h5>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">tableContext.js</div>
    <pre><code class="language-javascript">			
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
    </code></pre></fieldset> 
    
    <h5>1.2. Instantiate Table Context classes from JSON data.</h5>
    <p>When we load contacts data to the table, we also get data for the table context classes.</p>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">table.js</div>
    <pre><code class="language-javascript">	
    class Table {
        constructor(contacts, container) {
            this.tableHeaderContext = null;		
            this.table = null;
            this.contacts = contacts;
            this.container = container;
            this.defaultSelectedRow = { row: -1 };
            this.iSelectedRow = new Proxy(this.defaultSelectedRow, this.highlightIcon);
            // ...
        }
    
        displayTable = () => {
            this.tableHeaderContext = this.setTableHeaderContext();
            // ...
        }
                
        setTableHeaderContext = () => {
            let item0 = this.contacts[0];
            // get keys from first contact record			
            let itemKeys = Object.keys(item0);		
            let headerCellContexts = [];
            let sortContext = new TableSortContext(-1, []);
            let defaltHeaderCellCssClassList = ['unsorted', 'checked']; //, 'unchecked'
    
            itemKeys.forEach(key => {
                let cssClassList = defaltHeaderCellCssClassList;
                let caption = this.getCaption(key);
                let cellsContext = new TableHeaderCellContext(key, caption, cssClassList);
                headerCellContexts.push(cellsContext);
            });
    
            let tableHeaderContext = new TableHeaderContext(headerCellContexts, sortContext, "false");
            return tableHeaderContext;
        }
    }
    </code></pre></fieldset> 
    
    <h5>1.3. Update Table Context class objects, when user work with table.</h5>
    <h5>We update table context class objects during user manipulation with the table in two cases:</h5>
    <ul>
    <li>When user clicked on column header to sort column</a>
    <li>When user update the Search Filter</a>
    </li>
    </ul>
    <h5>1.3.1. Update Table Context when user clicked on column header to sort column.</h5>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">table.js</div>
    <pre><code class="language-javascript">	
    createTableHeaderFirstRow() {
    // ...
      // add listeners to row cells
      for (let i = 0; i < this.tableHeaderContext.cellContexts.length; i++) {
        if (!this.table.rows[0].cells[i].classList.contains("notsorted")) {
          this.table.rows[0].cells[i].
            addEventListener("click", () => {
              var isShiftKeyPressed = event.shiftKey;
              // in updateTable method we update table context and refresh table
              this.updateTable(i, isShiftKeyPressed, this.tableHeaderContext, this.table);
            });
        }
      }
    }
    
    updateTable(iLatestClickedCell, isShiftKeyPressed, tableHeaderContext, table) {			
      let updatedSortContext = this.updateTableHeaderSortContext(iLatestClickedCell,
          tableHeaderContext.sortContext, isShiftKeyPressed);
      tableHeaderContext.sortContext = updatedSortContext;
    
      let updatedCellContexts = this.updateTableHeaderCellContexts(tableHeaderContext);
      tableHeaderContext.cellContexts = updatedCellContexts;
    
      let sortRule = this.extractSortRule(tableHeaderContext);		
      this.contacts = Data.sortByRule(sortRule, this.contacts);		
          
      this.updateTableHeaderRow(tableHeaderContext.cellContexts, table);
      this.PopulateTable();		
    }
    </code></pre></fieldset>
    <h5>1.3.2. Update Table Context when user modify the Search Filter.</h5>
    <fieldset>
    <legend>Javascript</legend>
    <div class="legend2">iconFilter.js</div>
    <pre><code class="language-javascript">	
    updateSearchFilter() {
      var checkboxes = document.querySelectorAll(".filter-checkbox");
      // remove class "checked" from all cells 
      table.tableHeaderContext.cellContexts.forEach(context => {
          context.cssClassList = this.removeClassFromArray(context.cssClassList, "checked");
      });  
      // add class "checked" to the cell context class list
      // if in search filter dropdown the column name in checked         
      for (var i = 0; i < checkboxes.length; i++) {            
          let caption = checkboxes[i].parentElement.textContent;       
          table.tableHeaderContext.cellContexts.forEach(context => {
              let newContext = [];
              if(caption === context.caption && checkboxes[i].checked)
              {
                  newContext = JSON.parse(JSON.stringify(context.cssClassList));                    
                  context.cssClassList = this.addClassToArray(newContext, "checked");                   
              }                        
          });
      }
      let radio = document.querySelector("#radio1");
      radio.checked ? table.tableHeaderContext.isSencitiveSearch = "false" :
                      table.tableHeaderContext.isSencitiveSearch = "true";
    }
    </code></pre></fieldset>
    `;
    return markup;
    }
    