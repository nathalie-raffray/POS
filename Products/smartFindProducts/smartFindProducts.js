
//////////////FUNCTIONS THAT CAN BE USED////////
/*
  makeRow(row)
  getSqlCondition(conditon, entered, not)

*/



function makeProductSubClause(row, entered, not){

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

var makeSubClause = makeProductSubClause; //default

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




//ERROR WITH PRODUCT CODE:
//when i check PRODUCT CODE contains 00817, 008170001, 00817002, etc will not show up






///////makeRow and getSqlCondition is added underneath here/////////////////
