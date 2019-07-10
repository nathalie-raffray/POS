function makeCustomerSubClause(row, entered, not){

  var filter = row.children[0].value;
  var condition = row.children[1].value;
  console.log(condition);
  var conditionSql = getSqlCondition(condition, entered, not);
  console.log(conditionSql);
  var clause = '';

  switch(filter){
    case 'id':
      clause = ` id ${conditionSql}`;
      break;
    case 'name':
      clause = " CONCAT(`firstname`, ' ', `lastname`)" + ` ${conditionSql}`;
      break;
    case 'phonenumber':
      clause = ` phone1 ${conditionSql} OR phone2 ${conditionSql} OR phone3 ${conditionSql}`;
      break;
    case 'email':
      clause = ` email ${conditionSql}`;
      break;
    case 'points':
      clause = ` points ${conditionSql}`;
      break;
    case 'discount':
      clause = ` discount ${conditionSql}`;
      break;
    case 'postalcode':
      clause = ` postalcode ${conditionSql}`;
      break;
    case 'city':
      clause = ` city ${conditionSql}`;
      break;
    case 'All':
      clause = ` id ${conditionSql}
                OR phone1 ${conditionSql} OR phone2 ${conditionSql} OR phone3 ${conditionSql}
                OR email ${conditionSql}
                OR points ${conditionSql}
                OR discount ${conditionSql}
                OR postalcode ${conditionSql}
                OR city ${conditionSql}
                `;
      break;

  }

  return clause;

}
