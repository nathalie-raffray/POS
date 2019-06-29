//////////////////////////////////////////NAV BAR///////////////////////////////////////////////////
//var containerHeaders = document.getElementsByClassName('header');

for(var i = 0; i < navButtons.length; i++)
{
  navButtons[i].addEventListener('click', function(e){
    var dbSelected = document.getElementById('db_Selected');

    switch(this.textContent){

      case 'Customers':
        dbSelected.innerHTML = 'Customers';
        orderCol = orderColCustomers;
        makeRow = makeCustomerRow;
        searchUrl = 'Customers/searchCustomers.php';
        smartFindUrl = 'Customers/smartFindCustomers/smartFindCustomers.php';
        //also configure smart find
        //CHANGE MAIN BAR
        containerHeaders[0].textContent = 'id';
        containerHeaders[1].textContent = 'name';
        containerHeaders[2].textContent = 'phone number';
        containerHeaders[3].textContent = 'email';
        containerHeaders[4].textContent = 'points';
        containerHeaders[5].textContent = 'discount';
        containerHeaders[6].textContent = 'postal code';
        containerHeaders[7].textContent = 'city';

        //CHANGE SELECT
        searchBy.options[0].textContent = 'customer';
        searchBy.options[1].textContent = 'phone number';
        searchBy.options[2].textContent = 'email';
        searchBy.options[3].textContent = 'city';
        searchBy.options[4].textContent = 'postal code';
        searchBy.options[5].textContent = 'city';
        searchBy.options[6].textContent = 'discount';

        break;

      case 'Products':
        dbSelected.innerHTML = 'Products';
        orderCol = orderColProducts;
        makeRow = makeProductRow;
        searchUrl = 'Products/searchProducts.php';
        smartFindUrl = 'Products/smartFindProducts/smartFindProducts.php';
        //CHANGE MAIN BAR
        containerHeaders[0].textContent = 'Code';
        containerHeaders[1].textContent = 'Description';
        containerHeaders[2].textContent = 'Price';
        containerHeaders[3].textContent = 'Inventory';
        containerHeaders[4].textContent = 'Genre';
        containerHeaders[5].textContent = 'Filed Under';
        containerHeaders[6].textContent = 'Condition';
        containerHeaders[7].textContent = 'Label';

        //CHANGE SELECT
        searchBy.options[0].textContent = 'Product';
        searchBy.options[1].textContent = 'Description';
        searchBy.options[2].textContent = 'Artist';
        searchBy.options[3].textContent = 'Album';
        searchBy.options[4].textContent = 'Genre';
        searchBy.options[5].textContent = 'Label';
        searchBy.options[6].textContent = 'Price';

        break;

      case 'Orders':
        dbSelected.innerHTML = 'Orders';
        //console.log('o');
        break;

      case 'Order Requests':
        dbSelected.innerHTML = 'Order_Requests';
       // console.log('or');
        break;

      case 'Invoices':
        dbSelected.innerHTML = 'Invoices';
        //console.log('i');
        break;

    }

  });
}
