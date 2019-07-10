$(document.body).on('submit', '#smartFind, #smartFindC', function(e){
//document.getElementById('smartFind').addEventListener('submit', function(e){
  e.preventDefault();
  queryOrSearch = false;
  var rows;
  //console.log(rows);
//  var currentId;
  var form;

// SELECT id, type, description FROM (SELECT id, type, description FROM `lp` UNION ALL SELECT id,
//    type, description FROM `ln` UNION ALL SELECT id, type, description
//    FROM `cd`) AS errything WHERE description LIKE'%black%'
  if(previousdbSelected == 'Products'){
    query = 'SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM '
                +'( SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM `ln`'
                +'UNION ALL SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM `lp`'
                +'UNION ALL SELECT id, type, description, sell, qty, class, fileunder, vcond, scond, inv_floor FROM `cd` ) AS errything WHERE ';
    form = new FormData(document.getElementById("smartFind"));
    rows = document.getElementById('smartFindRows').children;
  }else if(previousdbSelected == 'Customers'){
    query = "SELECT id, firstname, lastname, mainphone, email, points, discount, postalcode, city FROM `customers` WHERE ";
    form = new FormData(document.getElementById("smartFindC"));
    rows = document.getElementById('smartFindRowsC').children;
  }
  var entered = form.getAll("text");

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
    url: 'smartFindShared/smartFind.php',
    data: search,
    success: function(response){
      console.log(response);
      $('.row').remove();
      if(noErrors(response)){
        displayResults(response, makeRow);
      }
    }
  });
});
