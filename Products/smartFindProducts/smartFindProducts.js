
//////////////FUNCTIONS THAT CAN BE USED////////
/*
  makeRow(row)
  getSqlCondition(conditon, entered, not)

*/

//////////////////WHEN THE FORM IS SUBMITTED//////////////////////////////

//var query; this is used to save a smart find POST object --> declared in search.js
// var search; this is used to save a regular search POST object --> declared in search.js
//var results; --> declared in search.js
//var rowsDisplayed; --> declared in search.js
//var numRowsToCreate; --> declared in search.js
// var input; --> declared in search.js
// var filterSearch; --> declared in search.js
// var searchIndex; --> declared in search.js
// var count; --> declared in search.js
// var offset; --> declared in search.js
// var pageNumber; --> declared in search.js
// var results; --> declared in search.js
// var rowsDisplayed; --> declared in search.js
// var numRowsToCreate; --> declared in search.js
// var orderby; --> declared in search.js
// var ascdesc; --> declared in search.js
//var queryOrSearch; //false if last call to server was done by smart find, true if done by search bar



document.getElementById('smartFind').addEventListener('submit', function(e){
  e.preventDefault();
  queryOrSearch = false;
  var rows = document.getElementById('smartFindRows').children;
  //console.log(rows);
//  var currentId;
  var form = new FormData(document.getElementById("smartFind"));
  var entered = form.getAll("text");
// SELECT id, type, description FROM (SELECT id, type, description FROM `lp` UNION ALL SELECT id,
//    type, description FROM `ln` UNION ALL SELECT id, type, description
//    FROM `cd`) AS errything WHERE description LIKE'%black%'
  query = 'SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM '
              +'( SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM `ln`'
              +'UNION ALL SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM `lp`'
              +'UNION ALL SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM `cd` ) AS errything WHERE ';
  var table;
  var i = 0;
  var num = 0; //this keeps track of which row we're at, without counting the quantifier rows (All, Any, None)
  var not1 = '';
  var not2 = '';
  var connector1=''; //this will be the connector between the #quantifier1 children
  var connector2=''; //this will be the connector between the #quantifier2 children


  //BE CAREFUL YOU NEED TO MAKE THE ENTRIES MYSQL SAFE
  while(i < rows.length-1){

    //console.log(rows[i].id);
    if(rows[i].id == 'quantifier1'){
      //console.log('im in');
      var allAnyNone = rows[i].children[0];
      makeConnector(allAnyNone, 1);

    }else if(rows[i].id=='quantifier2'){
      query += '(';
      var allAnyNone = rows[i].children[0];
      makeConnector(allAnyNone, 2);
      i++;

      if(not1 == 'NOT '){ //its time for some inner nested logic
        if(not2 == 'NOT '){
          not2 = '';
        }else if(not2 == ''){
          not2 = 'NOT ';
        }
        if(connector2 == ' AND '){
          connector2 = ' OR ';
        }else if(connector2 == ' OR '){
          connector2 = ' AND ';
        }
      }

      while(i < rows.length-1){
        if(entered[num].trim() == ''){ //this deals with the case where no one has entered anything on a particular row
                                  //eg. we don't need to add anything to the query.
          i++;
          num++;
          continue;
        }
        query += makeSubClause(rows[i], entered[num], not2);
        if(i != rows.length-2 && entered[num+1].trim() != ''){
          query += connector2;
        }
        i++;
        num++;
      }
      query += ')';

    }else{
      if(entered[num].trim() == ''){ //this deals with the case where no one has entered anything on a particular row
                                //eg. we don't need to add anything to the query.
        i++;
        num++;
        continue;
      }
      query += makeSubClause(rows[i], entered[num], not1);
      if(entered[num].trim() != '') query += connector1;

      num++;
    }
    i++;

  }

  function makeConnector(allAnyNone, connector){
    if(allAnyNone.value == 'All'){
      if(connector==1) connector1 = ' AND ';
      if(connector==2) connector2 = ' AND ';
    }
    else if(allAnyNone.value == 'Any'){
      if(connector==1) connector1 = ' OR ';
      if(connector==2) connector2 = ' OR ';
    }
    else if(allAnyNone.value == 'None'){
      if(connector==1){
        connector1 = ' AND ';
        not1 = 'NOT ';
      }else if(connector==2){
        connector2 = ' AND ';
        not2 = 'NOT ';
      }
    }
  }
  query = query.replace(`${connector1}()`, '');
  console.log(query);

  var search = {
    query: query,
    orderby: orderby,
    ascdesc: ascdesc
  };


  $.ajax({
    type: 'POST',
    url: 'Products/smartFindProducts/smartFindProducts.php',
    data: search,
    success: function(response){
      $('.row').remove();
      if(noErrors(response)){
        displayResults(response, makeProductRow);
      }
    }
  });
});

//ERROR WITH PRODUCT CODE:
//when i check PRODUCT CODE contains 00817, 008170001, 00817002, etc will not show up


function makeSubClause(row, entered, not){

  var filter = row.children[0].value;
  var condition = row.children[1].value;
  console.log(condition);
  var conditionSql = getSqlCondition(condition, entered, not);
  console.log(conditionSql);
  var clause = '';

  switch(filter){
    case 'Product Code':
      //ALL THE CHECKS
      var dbPrecised = false; //dbPrecised == data base precised
      var type;
      var eraseFirst = 2;
      //AND type = 1
      if( ( (entered[0] == 'l' || entered[0] == 'L') && (entered[1] == 'p' || entered[1] == 'P')) || (entered[0] == 'p' || entered[0] == 'P') ){
        dbPrecised = true;
        type = 1;
      }else if( ( (entered[0] == 'l' || entered[0] == 'L') && (entered[1] == 'n' || entered[1] == 'N')) || (entered[0] == 'n' || entered[0] == 'N') ){
        dbPrecised = true;
        type = 2;
      }else if( ( (entered[0] == 'c' || entered[0] == 'C') && (entered[1] == 'd' || entered[1] == 'D')) || (entered[0] == 'd' || entered[0] == 'D') ){
        dbPrecised = true;
        type = 3;
      }

      if(entered[0] == 'p' || entered[0] == 'P' || entered[0] == 'n' || entered[0] == 'N' || entered[0] == 'd' || entered[0] == 'D'){
        eraseFirst = 1;
      }
      if(dbPrecised){
        entered = entered.split('');
        if(eraseFirst == 1){
          entered[0] = '0';
        }else if(eraseFirst == 2){
          entered[0] = '0';
          entered[1] = '0';
        }
        entered = entered.join('');
      //  console.log(entered[0]);
      }
      //console.log(entered[0]);
      conditionSql = getSqlCondition(condition, entered, not);

      if(dbPrecised){
        clause = ` id ${conditionSql} AND type = ${type}`;
      }else{
        clause = ` id ${conditionSql}`;
      }
      break;
    case 'Description':
      clause = ` description ${conditionSql}`;
      break;
    case 'Genre':
      clause = ` class ${conditionSql}`;
      break;
    case 'Label':
      clause = ` family ${conditionSql}`;
      break;
    case 'Price':
      clause = ` sell ${conditionSql}`;
      break;
    case 'Quantity':
      clause = ` inv_floor ${conditionSql}`;
      break;
    case 'All':
      clause = ` id ${conditionSql}
                OR description ${conditionSql}
                OR genre ${conditionSql}
                OR class ${conditionSql}
                OR family ${conditionSql}
                OR sell ${conditionSql}
                OR fileunder ${conditionSql}
                OR inv_floor ${conditionSql}
                `;
      break;

  }

  return clause;

}



$('#smartFindRows').on('click', '.plus', function(e){
  e.preventDefault();
  var row = this.parentElement.parentElement;

  var newRow = document.querySelector('#customProductSmartFindRow').cloneNode(true);
  // newRow.createAttribute('class');
  newRow.removeAttribute('id');
  if(row.id == 'quantifier2'){
    newRow.className = 'under2';
  }else if(row.id == 'quantifier1'){
    newRow.className = 'under1';
  }else{
    newRow.className = row.className;
  }

  newRow.style.display = 'inline-block';
  //console.log(newRow);
  // console.log(newRow);
  row.parentNode.insertBefore(newRow, row.nextSibling);

});

$('#smartFindRows').on('click', '.minus', function(e){
  e.preventDefault();
  var row = this.parentElement.parentElement;
  row.remove();
});


$('#smartFindRows').on('change', '.firstFilter', function(){ //this is for when the value is changed of <select> of Product Code/Description/Artist/Album

  var secondFilterOnElement = this.parentElement.children[1];
  var filterPapa = document.getElementById('customProductSmartFindSelect');

  var secondFilter1 = filterPapa.childNodes[0].cloneNode(true);
  var secondFilter2 = filterPapa.childNodes[1].cloneNode(true);

  secondFilterOnElement.remove();
  var value = this.options[this.selectedIndex].value;

  if(value == 'Product Code' || value == 'Price' || value == 'Quantity'){
    this.parentNode.insertBefore(secondFilter2, this.nextSibling); // == insertAfter(this, secondFilter2). In reality insertAfter does not exist
  }else{
    this.parentNode.insertBefore(secondFilter1, this.nextSibling);
  }

});


///////makeRow and getSqlCondition is added underneath here/////////////////
