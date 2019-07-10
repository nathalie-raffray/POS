
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="cssForResize.css">
	<link rel="stylesheet" type="text/css" href="light.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="colResizable/colResizable-1.6.min.js"></script>
	<!-- <script src='mousestop-3.0.1/mousestop.js' type="text/javascript"></script> -->
	<!-- <script src='./mousestop-3.0.1/mousestop.jquery.json' type="text/javascript"></script>
	<script src='./mousestop-3.0.1/mousestop.min.js' type="text/javascript"></script>
	 <script src='../mousestop-3.0.1/package.json' type="text/javascript"></script> -->

</head>
<body>
		<div id="beautifulHeader">

		</div>


    <div id="maincontainer">
			<div id="waterGirl">
				<img src="pics/water.png" width="256"
					 height="256">
			</div>
        <div id="top-bar">
                <button type="button" title="Create Customer" name="create-customer"><img id="createcustomer" src="pics/customers.png" /></button>
                <button type="button" title="Create Product" name="create-product"><img id="createproduct" src="pics/products.png" /></button>
                <button type="button" title="Create Order" name="create-order"><img src="pics/order.png" /></button>
                <button type="button" title="Create Invoice" name="create-invoice"><img src="pics/invoice.png" /></button>
                <button type="button" title="Create PO" name="create-PO"><img src="pics/po.png" /></button>
                <button type="button" title="Create Supplier" name="create-supplier"><img src="pics/supplier.png" /></button>
                <button type="button" title="Create Consigne" id="unicorn" name="create-consigne"><span>&#x1f984;</span></button>

        </div>

        <div id="bigBox">

            <div id="leftBox">
                <ul id="nav-options">
                    <li><span class="navbar-titles">Store</span></li>
                    <li><button class="nav-button" type="button">Customers</button></li>
                    <li><button class="nav-button" type="button">Products</button></li>
                    <li><button class="nav-button" type="button">Orders</button></li>
                    <li><button class="nav-button" type="button">Order Requests</button></li>
                    <li><span class="navbar-titles">Sales</span></li>
                    <li><button class="nav-button" type="button">Invoices</button></li>
                    <li><button class="nav-button" type="button">POs</button></li>
                    <li><button class="nav-button" type="button">Suppliers</button></li>
                    <li><button class="nav-button" type="button">Consignes</button></li>
                </ul>
            </div>
						<span style="display:none" id="db_Selected">Products</span>
            <div id="rightBox">

                <div id="searchbar">


                    <div id="showitems">
                        <span>Show</span>
                        <select id="searchIndex" class="filter" name="searchIndex" form="searchForm">
                            <option value="one">0-100</option>
                            <option value="two">0-200</option>
                            <option value="five">0-500</option>
                            <option value="ten">0-1000</option>
                            <option value="All">All</option>
                        </select>
                        <span>Items</span>
                    </div>

                    <div id="rightsearchbar">
                        <div id="selectdb">
                            <label for="ln">LN</label><input type="checkbox" name="ln" id="ln" value="LN">
                            <label for="lp">LP</label><input type="checkbox" name="lp" id="lp" value="LP">
                            <label for="cd">CD</label><input type="checkbox" name="cd" id="cd" value="CD">
                            <!-- <label for="other">Other</label><input type="checkbox" name="other" id="other" value="Other"> -->
                            <!-- <label for="all">All</label><input type="checkbox" name="lp|cd" id="all" value="All"> -->

                        </div>
                        <div id="selectcol">
														<!-- <div w3-include-html="selectFilter.html"></div> -->
                            <select class="filter" id="filter" name="filter" form="searchForm">
                                <option value="Product Code">Product Code</option>
                                <option value="Description">Description</option>
                                <option value="Artist">Artist</option>
                                <option value="Album">Album</option>
                                <option value="Genre">Genre</option>
                                <option value="Label">Label</option>
																<option value="Price">Price</option>
                                <option value="All">All</option>
                            </select>
                            <form id="searchForm">
                                <input type="text" id="input-box" name="entered"  autofocus>
                            </form>
                        </div>
                    </div>





                </div>

                <div id="smartFindProducts">
									<button class="collapsible">Smart Find</button>
									<?php include("Products/smartFindProducts/customHTML_smartFindProducts.php"); ?>
                </div>
								<div id="smartFindCustomers" style="display:none">
									<button class="collapsible">Smart Find</button>
									<?php include("Customers/smartFindCustomers/customHTML_smartFindCustomers.php"); ?>
                </div>

                <div id="container">

                    <table id="tableheader">
                        <tr id="main-bar" width="100%" border="0" cellpadding="0" cellspacing="0">
                            <th class="col1"><button class="headerbutton" type="button"><span class="header">Code</span><span class="updown"></span></button></th>

                            <th class="col2"><button class="headerbutton" type="button"><span class="header">Description</span><span class="updown"></span></button></th>

                            <th class="col3"><button class="headerbutton" type="button"><span class="header">Price</span><span class="updown"></span></button></th>

                            <th ><button class="headerbutton" type="button"><span class="header">Inventory</span><span class="updown"></span></button></th>

                            <th class="col5"><button class="headerbutton" type="button"><span class="header">Genre</span><span class="updown"></span></button></th>

                            <th class="col6"><button class="headerbutton" type="button"><span class="header">Filed Under</span><span class="updown"></span></button></th>

                            <th class="col7"><button class="headerbutton" type="button"><span class="header">Condition</span><span class="updown"></span></button></th>

                            <th class="col8"><button class="headerbutton" type="button"><span class="header">Label</span><span class="updown"></span></button></th>
                        </tr>
												<?php include("Products/invDropDown.php") ?>
												<tr class="row">
														<td class="col1 dblclickable">LP000123123</td>
														<td class="col2 dblclickable">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3 dblclickable">$24.99</td>
														<td class="col4">
															<span class="dot rowDot"></span>
															<span class="available">4 Available</span>
															<span class="dropdownArrow"></span>
															<span class="dropdownTriangle"></span>
															<div class="invDropdown">
															  <span class="dot totalDot"></span>
															  <span class="dotNum numTotal">0</span>
															  <span class="dotWhere">TOTAL</span><br>
															  <span class="dot availableDot"></span>
															  <span class="dotNum numFloor">0</span>
															  <span class="dotWhere">FLOOR</span><br>
															  <span class="dot reservedDot"></span>
															  <span class="dotNum numReserved">0</span>
															  <span class="dotWhere">RESERVED</span><br>
															  <span class="dot warehouseDot"></span>
															  <span class="dotNum numBasement">0</span>
															  <span class="dotWhere">IN BASEMENT</span><br>
															  <span class="dot ccustomersDot"></span>
															  <span class="dotNum numCCustomers">0</span>
															  <span class="dotWhere">COMING FOR CUSTOMERS</span><br>
															  <span class="dot ccstockDot"></span>
															  <span class="dotNum numCStock">0</span>
															  <span class="dotWhere">COMING FOR STOCK</span>
															</div>
															<!-- <button onclick="invDropDown()" class="dropbtn">Dropdown</button>
														  <div id="myDropdown" id="dropdown-content">
														    <a href="#">Link 1</a>
														    <a href="#">Link 2</a>
														    <a href="#">Link 3</a>
														  </div> -->
														</td>
														<td class="col5 dblclickable">Reggae</td>
														<td class="col6 dblclickable"></td>
														<td class="col7 dblclickable">VG+/VG+</td>
														<td class="col8 dblclickable">Heartbeat Records</td>
												</tr>
												<tr class="row">
														<td class="col1">LP000123123</td>
														<td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3">$24.99</td>
														<td class="col4">
															<?php include("Products/invDropDown.php") ?>
														</td>
														<td class="col5">Reggae</td>
														<td class="col6"></td>
														<td class="col7">VG+/VG+</td>
														<td class="col8">Heartbeat Records</td>
												</tr>
												<tr class="row">
														<td class="col1">LP000123123</td>
														<td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3">$24.99</td>
														<td class="col4">4 Available</td>
														<td class="col5">Reggae</td>
														<td class="col6"></td>
														<td class="col7">VG+/VG+</td>
														<td class="col8">Heartbeat Records</td>
												</tr>
												<tr class="row">
														<td class="col1">LP000123123</td>
														<td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3">$24.99</td>
														<td class="col4">4 Available</td>
														<td class="col5">Reggae</td>
														<td class="col6"></td>
														<td class="col7">VG+/VG+</td>
														<td class="col8">Heartbeat Records</td>
												</tr>
												<tr class="row">
														<td class="col1">LP000123123</td>
														<td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3">$24.99</td>
														<td class="col4">4 Available</td>
														<td class="col5">Reggae</td>
														<td class="col6"></td>
														<td class="col7">VG+/VG+</td>
														<td class="col8">Heartbeat Records</td>
												</tr>
												<tr class="row">
														<td class="col1 dblclickable">LP000123123</td>
														<td class="col2 dblclickable">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3 dblclickable">$24.99</td>
														<td class="col4">4 Available</td>
														<td class="col5 dblclickable">Reggae</td>
														<td class="col6"></td>
														<td class="col7">VG+/VG+</td>
														<td class="col8">Heartbeat Records</td>
												</tr>
												<tr class="row">
														<td class="col1">LP000123123</td>
														<td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
														<td class="col3">$24.99</td>
														<td class="col4">4 Available</td>
														<td class="col5">Reggae</td>
														<td class="col6"></td>
														<td class="col7">VG+/VG+</td>
														<td class="col8">Heartbeat Records</td>
												</tr>

											<!-- <div id="scrollTable">
												 <table id="table">

													<div id="waterGirl3">
														<img src="pics/water3.png" width="256"
											         height="256">
													</div> -->

		                        <!-- <tr id="main-bar">
		                            <th class="col1 main-bar-element">Code<button class="updown" type="button">&#9650</button></th>

		                            <th class="col2 main-bar-element">Description<button class="updown" type="button">&#9650</button></th>

		                            <th class="col3 main-bar-element">Price<button class="updown" type="button">&#9650</button></th>

		                            <th class="col4 main-bar-element">Inventory<button class="updown" type="button">&#9650</button></th>

		                            <th class="col5 main-bar-element">Genre<button class="updown" type="button">&#9650</button></th>

		                            <th class="col6 main-bar-element">Filed Under<button class="updown" type="button">&#9650</button></th>

		                            <th class="col7 main-bar-element">Condition<button class="updown" type="button">&#9650</button></th>

		                            <th class="col8 main-bar-element">Label<button class="updown" type="button">&#9650</button></th>

		                        </tr> -->

		                        <!-- <tr class="row">
		                            <td class="col1">LP000123123</td>
		                            <td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
		                            <td class="col3">$24.99</td>
		                            <td class="col4">4 Available</td>
		                            <td class="col5">Reggae</td>
		                            <td class="col6"></td>
		                            <td class="col7">VG+/VG+</td>
		                            <td class="col8">Heartbeat Records</td>
		                        </tr>



		                        <tr class="row">
		                            <td class="col1">LP000123123</td>
		                            <td class="col2">Black Uhuru - Guess Who's Coming To Dinner?</td>
		                            <td class="col3">$24.99</td>
		                            <td class="col4">4 Available</td>
		                            <td class="col5">Reggae</td>
		                            <td class="col6"></td>
		                            <td class="col7">VG+/VG+</td>
		                            <td class="col8">Heartbeat Records</td>
		                        </tr> -->

		                        <!-- <tr class="row">
		                            <td class="col1"><div>LP000123123</div></td>
		                            <td class="col2"><div>Black Uhuru - Guess Who's Coming To Dinner?</div></td>
		                            <td class="col3"><div>$24.99</div></td>
		                            <td class="col4"><div>4 Available</div></td>
		                            <td class="col5"><div>Reggae</div></td>
		                            <td class="col6"><div></div></td>
		                            <td class="col7"><div>VG+/VG+</div></td>
		                            <td class="col8"><div>Heartbeat Records</div></td>
		                        </tr>



		                        <tr class="row">
		                            <td class="col1"><div>LP000123123</div></td>
		                            <td class="col2"><div>Black Uhuru - Guess Who's Coming To Dinner?</div></td>
		                            <td class="col3"><div>$24.99</div></td>
		                            <td class="col4"><div>4 Available</div></td>
		                            <td class="col5"><div>Reggae</div></td>
		                            <td class="col6"><div></div></td>
		                            <td class="col7"><div>VG+/VG+</div></td>
		                            <td class="col8"><div>Heartbeat Records</div></td>
		                        </tr> -->
		                        <span id="productOpened" style="display:none"></span>


		                    <!-- </table> -->
											</table>

										<!-- </div> -->

                </div>

          </div>



        </div>
    </div>


<script src="sharedSearch/search.js"></script>
<script src="mainJS.js"></script>
<script src="sharedSearch/scrollTable.js"></script>
<script src="sharedSearch/reOrder.js"></script>
<script src="sharedSearch/resizeCol.js"></script>
<script src="Products/smartFindProducts/smartFindProducts.js"></script>
<script src="Products/products.js"></script>
<script src="Customers/searchCustomers.js"></script>
<script src="makeRow.js"></script>
<script src="smartFindShared/getSqlCondition.js"></script>
<script src="navBar.js"></script>

</body>


</html>
