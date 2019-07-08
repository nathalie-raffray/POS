///////////////////////////////DEFAULT VALUES///////////////////////////////////////////////////////
//var containerHeaders = document.getElementsByClassName('header');
containerHeaders[0].value = 'id';
containerHeaders[1].value = 'description';
containerHeaders[2].value = 'sell';
containerHeaders[3].value = 'inv_floor';
containerHeaders[4].value = 'class';
containerHeaders[5].value = 'fileunder';
containerHeaders[6].value = 'vcond';
containerHeaders[7].value = 'family';

var previousdbSelected = 'Products'; //previous database selected (eg. Customers, Products, Orders, etc)
//////////////////////////////////////////NAV BAR///////////////////////////////////////////////////

for(var i = 0; i < navButtons.length; i++)
{
  navButtons[i].addEventListener('click', function(e){
  //  var dbSelected = document.getElementById('db_Selected');

    if(previousdbSelected == this.textContent){ //this is to ensure that if someone is on the product page and clicks "Products" on the nav bar, then the rows won't be removed
      return;
    }
    previousdbSelected = this.textContent;


    switch(this.textContent){
      default:
        previousRowClicked = undefined;

      case 'Customers':
        document.getElementById('smartFindProducts').style.display = 'none';
        document.getElementById('smartFindCustomers').style.display = 'block';
        $('.row').remove();         //clear rows
        document.getElementById('input-box').value = ''; //clear search box
      //  dbSelected.innerHTML = 'Customers';
        //orderCol = orderColCustomers;
        makeRow = makeCustomerRow;
        searchUrl = 'Customers/searchCustomers.php';
        smartFindUrl = 'Customers/smartFindCustomers/smartFindCustomers.php';
        //also configure smart find
        //CHANGE MAIN BAR
        containerHeaders[0].textContent = 'id';
        containerHeaders[0].value = 'id';
        containerHeaders[1].textContent = 'name';
        containerHeaders[1].value = 'firstname';
        containerHeaders[2].textContent = 'phone number';
        containerHeaders[2].value = 'mainphone';
        containerHeaders[3].textContent = 'email';
        containerHeaders[3].value = 'email';
        containerHeaders[4].textContent = 'points';
        containerHeaders[4].value = 'points';
        containerHeaders[5].textContent = 'discount';
        containerHeaders[5].value = 'discount';
        containerHeaders[6].textContent = 'postal code';
        containerHeaders[6].value = 'postalcode';
        containerHeaders[7].textContent = 'city';
        containerHeaders[7].value = 'city';

        //CHANGE SELECT
        searchBy.options[0].textContent = 'customer';
        searchBy.options[0].value = 'customer';
        searchBy.options[1].textContent = 'phone number';
        searchBy.options[1].value = 'phone number';
        searchBy.options[2].textContent = 'email';
        searchBy.options[2].value = 'email';
        searchBy.options[3].textContent = 'city';
        searchBy.options[3].value = 'city';
        searchBy.options[4].textContent = 'postal code';
        searchBy.options[4].value = 'postal code';
        searchBy.options[5].textContent = 'points';
        searchBy.options[5].value = 'points';
        searchBy.options[6].textContent = 'discount';
        searchBy.options[6].value = 'discount';

        break;

      case 'Products':
        document.getElementById('smartFindProducts').style.display = 'block';
        document.getElementById('smartFindCustomers').style.display = 'none';
        $('.row').remove();         //clear rows
        document.getElementById('input-box').value = ''; //clear search box
        pastInvDropped = undefined; //pastInvDropped keeps track of last inventory dropdown on products page.
                                    //it is used to know if to close an inventory dropdown or open it
      //  dbSelected.innerHTML = 'Products';
        //orderCol = orderColProducts;
        makeRow = makeProductRow;
        searchUrl = 'Products/searchProducts.php';
        smartFindUrl = 'Products/smartFindProducts/smartFindProducts.php';
        //CHANGE MAIN BAR
        containerHeaders[0].textContent = 'Code';
        containerHeaders[0].value = 'id';
        containerHeaders[1].textContent = 'Description';
        containerHeaders[1].value = 'description';
        containerHeaders[2].textContent = 'Price';
        containerHeaders[2].value = 'sell';
        containerHeaders[3].textContent = 'Inventory';
        containerHeaders[3].value = 'inv_floor';
        containerHeaders[4].textContent = 'Genre';
        containerHeaders[4].value = 'class';
        containerHeaders[5].textContent = 'Filed Under';
        containerHeaders[5].value = 'fileunder';
        containerHeaders[6].textContent = 'Condition';
        containerHeaders[6].value = 'vcond';
        containerHeaders[7].textContent = 'Label';
        containerHeaders[7].value = 'family';

        //CHANGE SELECT
        searchBy.options[0].textContent = 'Product Code';
        searchBy.options[0].value = 'Product Code';
        searchBy.options[1].textContent = 'Description';
        searchBy.options[1].value = 'Description';
        searchBy.options[2].textContent = 'Artist';
        searchBy.options[2].value = 'Artist';
        searchBy.options[3].textContent = 'Album';
        searchBy.options[3].value = 'Album';
        searchBy.options[4].textContent = 'Genre';
        searchBy.options[4].value = 'Genre';
        searchBy.options[5].textContent = 'Label';
        searchBy.options[5].value = 'Label';
        searchBy.options[6].textContent = 'Price';
        searchBy.options[6].value = 'Price';

        break;

      case 'Orders':
        document.getElementById('smartFindCustomers').style.display = 'none';
        document.getElementById('smartFindProducts').style.display = 'none';
        $('.row').remove();         //clear rows
        document.getElementById('input-box').value = ''; //clear search box
    //    dbSelected.innerHTML = 'Orders';
        //console.log('o');
        break;

      case 'Order Requests':
        document.getElementById('smartFindCustomers').style.display = 'none';
        document.getElementById('smartFindProducts').style.display = 'none';
        $('.row').remove();         //clear rows
        document.getElementById('input-box').value = ''; //clear search box
      //  dbSelected.innerHTML = 'Order_Requests';
       // console.log('or');
        break;

      case 'Invoices':
        document.getElementById('smartFindCustomers').style.display = 'none';
        document.getElementById('smartFindProducts').style.display = 'none';
        $('.row').remove();         //clear rows
        document.getElementById('input-box').value = ''; //clear search box
    //    dbSelected.innerHTML = 'Invoices';
        //console.log('i');
        break;

    }

  });
}
