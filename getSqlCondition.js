function getSqlCondition(condition, entered, not){
  var clause;

  switch(condition){
    case 'contains':
      clause = `${not} LIKE "%${entered}%"`;
      break;
    case 'ends_with':
      clause = `${not} LIKE "%${entered}$"`;
      break;
    case 'begins_with':
      clause = `${not} LIKE "${entered}%"`;
      break;
    case 'is':
      if(not == ''){
        clause = `IN ("${entered}")`;
      }else{
        clause = `NOT IN ("${entered}")`;
      }
      break;
    case 'is_not':
      if(not == ''){
        clause = `NOT IN ("${entered}")`;
      }else{
        clause = `IN ("${entered}")`;
      }
      break;
    case 'is_equal_to':
      if(not == ''){
        clause = `= ${entered}`
      }else{
        clause = `!= ${entered}`
      }
      break;
    case 'is_not_equal_to':
      if(not == ''){
        clause = `!= ${entered}`
      }else{
        clause = `= ${entered}`
      }
      break;
    case 'less_than':
      if(not == ''){
        clause = `< ${entered}`;
      }else{
        clause = `>= ${entered}`;
      }
      break;
    case 'greater_than':
      if(not == ''){
        clause = `> ${entered}`;
      }else{
        clause = `<= ${entered}`;
      }
      break;
    case 'greater_than_or_equal':
      if(not == ''){
        clause = `>= ${entered}`;
      }else{
        clause = `< ${entered}`;
      }
      break;
    case 'is_between':
        clause = `>= ${entered}`;
        break;



  }
  return clause;

}
