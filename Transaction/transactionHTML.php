<!-- https://www.w3schools.com/howto/howto_js_curtain_menu.asp -->

<div id="transactionScreen">
  <button id="goBack">
    <span>&#x27aa;</span>
  </button>

  <div id="ttopBar">
    <div id="ttopButtons">
      <input id="tsearch" type="search" name="search" value=" Search Products">
      <button id="tsearchProduct "type="button" name="button"><img width="100%" height="32" src="pics/littlevinyl.png"></button>
      <button id="tsearchCustomer "type="button" name="button"><img width="100%" height="32" src="pics/littlecustomer.jpg"></button>

    </div>
  </div>

  <div id="tmainBox">
    <div id="tleftBox">
      <div id="tcustomerBox">
        <!-- <div id="tcwbox"> -->
          <span id="tcustomertitle">Customer</span>
          <span id="twalkintitle">Walk In</span><br>
        <!-- </div> -->
        <div id="tcustomerInfo">
            <span id="tcustomername">Nathalie Raffray</span><br><br>
            <span class="bold" id="tphonetitle">Phone</span><span class="notbold" id="tphone">(438) 926-7260</span><br>
            <span class="bold" id="temailtitle">Email</span><span class="notbold" id="temail">nathalie.raffray9@gmail.com</span><br>
            <span class="bold" id="tshippingtitle">Shipping</span><div class="notbold" id="tshipping">
              <span id="taddress1">555 dead dog lane</span><br>
              <span id="taddress2">Penthouse</span><br>
              <span id="taddress2">Penthouse</span><br>
              <span id="taddress3">St Tropez, QC, 92009</span><br>
              <span id="tcountry">Monaco</span><br>
            </div>
        </div>
        <div id="twalkinInfo">
          Name <br>
          <input type="text" name="walkinName"><br>
          Phone/Email <br>
          <input type="text" name="walkinPhone"><br>
          Zip Code <br>
          <input type="text" name="walkinZipCode"><br>
        </div>
      </div>
      <div id="tbeepBoopBox">
        <span class="tbeep" id="poch">Pochettes</span><span class="tbeep" id="gear">Gear</span><span class="tbeep" id="dranks">Dranks</span><span class="tbeep" id="other">Other</span>
        <br>
        <div id="tbuttonBox">
          <button type="button" name="button">10 Pochettes Exterieures</button>
          <button type="button" name="button">100 Pochettes Exterieures</button>
          <button type="button" name="button">10 Pochettes Interieures</button>
          <button type="button" name="button">100 Pochettes Interieures</button>
          <button type="button" name="button">25 Pochettes Interieures Papiers</button>
          <button type="button" name="button">10 Pochettes Japonaises</button>
          <button type="button" name="button">100 Pochettes Japonaises</button>
          <button type="button" name="button">10 Pochettes 7"</button>
          <button type="button" name="button">100 Pochettes 7"</button>
        </div>
      </div>
    </div>
    <div id="tMiddleBox">

      <table id="transactionTable">
        <tr>
          <th>Qty</th>
          <th>Product</th>
          <th>Sell</th>
          <th>Disc.</th>
          <th>Total Sell</th>
        </tr>

        <tr>
          <td><input class="qty" type="text" name="qty" value="1"></td>
          <td>
            <span class="productName">Mf Doom - MmFood</span><br>
            <span class="productId">LN00003953</span>
          </td>
          <td><input type="text" class="sell" name="sell" value="5.99"></td>
          <td><input type="text" class="discount" name="discount" value="0"></td>
          <td><input type="text" class="totalsell" name="totalsell" value="5.99"></td>
        </tr>


        <tr>
          <td><input class="qty" type="text" name="qty" value="1"></td>
          <td>
            <span class="productName">Genesis - A Trick of the Tail</span><br>
            <span class="productId">CD00009328</span>
          </td>
          <td><input type="text" class="sell" name="sell" value="5.99"></td>
          <td><input type="text" class="discount" name="discount" value="0"></td>
          <td><input type="text" class="totalsell" name="totalsell" value="5.99"></td>
        </tr>
      </table>
    </div>
    <!-- <div id="tRightBox">

    </div> -->
  </div>

  <div id="tbottomBar">

  </div>





</div>
