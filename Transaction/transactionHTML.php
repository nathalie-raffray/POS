<!-- https://www.w3schools.com/howto/howto_js_curtain_menu.asp -->

<div id="transactionScreen">
  <button id="goBack">X</button>

  <div id="ttopBar">
    <input type="search" name="search">
  </div>

  <div id="tmainBox">
    <div id="tleftBox">

    </div>
    <div id="tMiddleBox">
      <div class="middleTopBar">
        <span id="qtyTH">Qty</span>
        <span id="productTH">Product</span>
        <span id="sellTH">Sell</span>
        <span id="discTH">Disc</span>
        <span id="totalSellTH">Total Sell</span>
      </div>
      <ul>
        <li>
          <div class="tqty">
            <input class="qty" type="text" name="qty" value="1"><br>
            <span class="attention"></span>
          </div>
          <!-- <span class="attention"><img src="pics/stop.jpg"></span> -->
          <div class="tproduct">
            <span class="productName">Mf Doom - MmFood</span><br>
            <span class="productId">LN00003953</span>
          </div>

          <div>
            <input type="text" class="sell" name="sell" value="53.99">
            <input type="text" class="discount" name="discount" value="0">
            <input type="text" class="totalsell" name="totalsell" value="53.99">
          </div>
        </li>
        <li>
          <div class="tqty">
            <input class="qty" type="text" name="qty" value="1"><br>
            <span class="attention"></span>
          </div>
          <div class="tproduct">
            <span class="productName">Genesis - A Trick of the Tail</span><br>
            <span class="productId">CD00009328</span>
          </div>
          <div>
            <input type="text" class="sell" name="sell" value="5.99">
            <input type="text" class="discount" name="discount" value="0">
            <input type="text" class="totalsell" name="totalsell" value="5.99">
          </div>
        </li>
      </ul>
    </div>
    <div id="tRightBox">

    </div>
  </div>





</div>
