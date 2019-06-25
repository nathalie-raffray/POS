<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="light.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<!-- <script src='mousestop-3.0.1/mousestop.js' type="text/javascript"></script> -->
	<!-- <script src='./mousestop-3.0.1/mousestop.jquery.json' type="text/javascript"></script>
	<script src='./mousestop-3.0.1/mousestop.min.js' type="text/javascript"></script>
	 <script src='../mousestop-3.0.1/package.json' type="text/javascript"></script> -->

</head>
<body>

    <div id="maincontainer">
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

            <div id="rightBox">

                <div id="searchbar">


                    <div id="showitems">
                        <span>Show</span>
                        <select id="searchIndex" name="searchIndex" form="searchForm">
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
                            <label for="other">Other</label><input type="checkbox" name="other" id="other" value="Other">
                            <label for="all">All</label><input type="checkbox" name="lp|cd" id="all" value="All">

                        </div>
                        <div id="selectcol">
														<!-- <div w3-include-html="selectFilter.html"></div> -->
                            <select class="filter" name="filter" form="searchForm">
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
                                <input type="text" id="input-box" name="entered" autofocus>
                            </form>
                        </div>
                    </div>





                </div>

                <div >
									<button class="collapsible">Smart Find</button>
									<div class="content">
										<ul id="smartFindRows">
											<li id="quantifier1">
												<select class="filter"> <!-- name="quantifier1" form="smartFind" -->
													<option value="All">All</option>
													<option value="Any">Any</option>
													<option value="None">None</option>
												</select>
												<span>of the following are true</span>
												<button type="button" class="plus" name="button">+</button>
											</li>
											<li class="under1">
												<select class="filter"> <!-- name="smfFilter11" form="smartFind" -->
														<option value="Product Code">Product Code</option>
														<option value="Description">Description</option>
														<option value="Artist">Artist</option>
														<option value="Album">Album</option>
														<option value="Genre">Genre</option>
														<option value="Label">Label</option>
														<option value="Price">Price</option>
														<option value="Quantity">Quantity</option>
														<option value="All">All</option>
												</select>
												<select class="filter"> <!-- name="quantifier1" form="smartFind" -->
													<option value="contains">contains</option>
													<option value="ends_with">ends with</option>
													<option value="begins_with">begins with</option>
													<option value="is">is</option>
													<option value="is_not">is not</option>
												</select>
												<input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
												<button type="button" class="plus" name="button">+</button>
												<button type="button" class="minus" name="button">-</button>
											</li>
											<li class="under1" id="quantifier2">
												<select class="filter" id="quant2"> <!-- name="quantifier1" form="smartFind" -->
													<option value="All">All</option>
													<option value="Any">Any</option>
													<option value="None">None</option>
												</select>
												<span>of the following are true</span>
												<button type="button" class="plus" name="button">+</button>
												<button type="button" class="minus" name="button">-</button>
											</li>
											<li class="under2">
												<select class="filter"> <!-- name="operator11" form="smartFind" -->
														<option value="Product Code">Product Code</option>
														<option value="Description">Description</option>
														<option value="Artist">Artist</option>
														<option value="Album">Album</option>
														<option value="Genre">Genre</option>
														<option value="Label">Label</option>
														<option value="Price">Price</option>
														<option value="Quantity">Quantity</option>
														<option value="All">All</option>
												</select>
												<select class="filter"> <!-- name="operator11" form="smartFind" -->
													<option value="contains">contains</option>
													<option value="ends_with">ends with</option>
													<option value="begins_with">begins with</option>
													<option value="is">is</option>
													<option value="is_not">is not</option>
												</select>
												<input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
												<button type="button" class="plus" name="button">+</button>
												<button type="button" class="minus" name="button">-</button>
											</li>
											<li class="under2">
												<select class="filter"> <!-- name="operator11" form="smartFind" -->
														<option value="Product Code">Product Code</option>
														<option value="Description">Description</option>
														<option value="Artist">Artist</option>
														<option value="Album">Album</option>
														<option value="Genre">Genre</option>
														<option value="Label">Label</option>
														<option value="Price">Price</option>
														<option value="Quantity">Quantity</option>
														<option value="All">All</option>
												</select>
												<select class="filter" > <!-- name="operator11" form="smartFind" -->
													<option value="is_equal_to">is equal to</option>
													<option value="is_not_equal_to">is not equal to</option>
													<option value="less_than">less than</option>
													<option value="greater_than">greater than</option>
													<option value="greater_than_or_equal">greater than or equal</option>
													<option value="is_between">is between</option>
												</select>
												<input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
												<button type="button" class="plus" name="button">+</button>
												<button type="button" class="minus" name="button">-</button>
											</li>
											<li style = "display:none">
												<select class="filter"> <!-- name="operator11" form="smartFind" -->
														<option value="Product Code">Product Code</option>
														<option value="Description">Description</option>
														<option value="Artist">Artist</option>
														<option value="Album">Album</option>
														<option value="Genre">Genre</option>
														<option value="Label">Label</option>
														<option value="Price">Price</option>
														<option value="Quantity">Quantity</option>
														<option value="All">All</option>
												</select>
												<select class="filter" > <!-- name="operator11" form="smartFind" -->
													<option value="is_equal_to">is equal to</option>
													<option value="is_not_equal_to">is not equal to</option>
													<option value="less_than">less than</option>
													<option value="greater_than">greater than</option>
													<option value="greater_than_or_equal">greater than or equal</option>
													<option value="is_between">is between</option>
												</select>
												<input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
												<button type="button" class="plus" name="button">+</button>
												<button type="button" class="minus" name="button">-</button>
											</li>
											<form id="smartFind">
												<input type="submit" name="submit" value="" style="display:none">
											</form>

											<!-- <li>
												<button type="submit">
											</li> -->
										</ul>
									  <!-- <div id="smf1">
											<select class="filter" name="quantifier1" form="smartFind">
												<option value="All">All</option>
												<option value="Any">Any</option>
												<option value="None">None</option>
											</select>
											<span>of the following are true</span>


									  </div> -->
										<!-- <div class="under1">
											<select class="filter" name="smfFilter11" form="smartFind">
													<option value="Product Code">Product Code</option>
													<option value="Description">Description</option>
													<option value="Artist">Artist</option>
													<option value="Album">Album</option>
													<option value="Genre">Genre</option>
													<option value="Label">Label</option>
													<option value="Price">Price</option>
													<option value="All">All</option>
											</select>
											<select class="filter" name="operator11" form="smartFind">
												<option value="contains">contains</option>
												<option value="ends_with">ends with</option>
												<option value="begins_with">begins with</option>
												<option value="is">is</option>
												<option value="is_not">is not</option>
											</select>
											<input type="text" name="text11" class="smfTextBox" form="smartFind" autofocus>
											<button type="button" class="plus" name="button">+</button>
											<button type="button" class="minus" name="button">-</button>
									  </div> -->
										<!-- <div id="smf3">

									  </div>
										<div id="smf4">

									  </div>
										<div id="smf5">

									  </div> -->
									</div>
                <!-- Implement this with collapsible -->
                </div>

                <div id="container">

                    <table id="tableheader">
                        <tr id="main-bar">
                            <th class="col1"><button class="headerbutton" type="button"><span class="header">Code</span><span class="updown">&#9650</span></button></th>

                            <th class="col2"><button class="headerbutton" type="button"><span class="header">Description</span><span class="updown">&#9650</span></button></th>

                            <th class="col3"><button class="headerbutton" type="button"><span class="header">Price</span><span class="updown">&#9650</span></button></th>

                            <th class="col4"><button class="headerbutton" type="button"><span class="header">Inventory</span><span class="updown">&#9650</span></button></th>

                            <th class="col5"><button class="headerbutton" type="button"><span class="header">Genre</span><span class="updown">&#9650</span></button></th>

                            <th class="col6"><button class="headerbutton" type="button"><span class="header">Filed Under</span><span class="updown">&#9650</span></button></th>

                            <th class="col7"><button class="headerbutton" type="button"><span class="header">Condition</span><span class="updown">&#9650</span></button></th>

                            <th class="col8"><button class="headerbutton" type="button"><span class="header">Label</span><span class="updown">&#9650</span></button></th>

                        </tr>

                    </table>

                    <table id="table">

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


                    </table>

                </div>

          </div>



        </div>
    </div>


<script src="backend/smartFind/smartFindProducts.js"></script>
<script src="mainJS.js"></script>
<script src="search.js"></script>
<script src="makeRow.js"></script>
<script src="getSqlCondition.js"></script>

</script>
</body>


</html>
