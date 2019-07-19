<!-- https://www.w3schools.com/howto/howto_js_curtain_menu.asp -->

<div id="transactionScreen">
  <button id="goBack">
    <span>&#x27aa;</span>
  </button>

  <div id="ttopBar">
    <div id="ttopButtons">
      <input id="tsearch" type="search" name="search" value=" Search Products">
      <button id="tsearchProduct" type="button" name="button"><img width="100%" height="32" src="pics/littlevinyl.png"></button>
      <button id="tsearchCustomer" type="button" name="button"><img width="100%" height="32" src="pics/littlecustomer.jpg"></button>

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
            <div id="tcustomerNameBox">
                <button type="button" id="teditCustomer" name="button"><img width="17" height="17" src="pics/edit.png"></button><span id="tcustomername">Nathalie Raffray</span>
            </div>
            <div id="tcustomerInfoetc">
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
        <div id="pochBox" class="tbuttonBox">
          <button type="button" name="button">10 Pochettes Exterieures</button>
          <button type="button" name="button">100 Pochettes Exterieures</button>
          <button type="button" name="button">10 Pochettes Interieures</button>
          <button type="button" name="button">100 Pochettes Interieures</button>
          <button type="button" name="button">10 Pochettes Japonaises</button>
          <button type="button" name="button">100 Pochettes Japonaises</button>
          <button type="button" name="button">10 Pochettes 7"</button>
          <button type="button" name="button">100 Pochettes 7"</button>
          <button type="button" name="button">25 Pochettes Interieures Papiers</button>
          <button type="button" name="button">500 Pochettes Exterieures</button>
        </div>

        <div id="gearBox" class="tbuttonBox" style="display:none">
          <button type="button" name="button">Reparation: 0.5 heure(s)</button>
          <button type="button" name="button">Reparation: 1.0 heure(s)</button>
          <button type="button" name="button">Reparation: 1.5 heure(s)</button>
          <button type="button" name="button">Pieces De Rechange</button>
          <button type="button" name="button">Courroie</button>
          <button type="button" name="button">Dome Pour 45-Tours</button>
          <button type="button" name="button">Installation De Cartouche</button>
        </div>

        <div id="dranksBox" class="tbuttonBox" style="display:none">
          <button type="button" name="button">bouteille d'eau</button>
          <button type="button" name="button">7up</button>
          <button type="button" name="button">PERRIER</button>
          <button type="button" name="button">PEPSI</button>
          <button type="button" name="button">GATORADE</button>
          <button type="button" name="button">JUS OASIS</button>
        </div>

        <div id="otherBox" class="tbuttonBox" style="display:none">
          <button type="button" name="button">Contrat Achat - VINYL</button>
          <button type="button" name="button">Contrat Achat - GEAR</button>
          <button type="button" name="button">Sac Aux 33 Tours</button>
          <button type="button" name="button">Liquidation 45 Tours</button>
          <button type="button" name="button">Album Discogs - AUCUNE REQUETE</button>
          <button type="button" name="button">Album Discogs - REQUETE EN LIGNE</button>
          <button type="button" name="button">Carte Cadeau</button>
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
    <button type="button" name="button" id="clear">Clear</button>
    <button type="button" name="button" id="checkout">Check Out</button>
    <div id="tpriceBox">
      <div id="tpriceButtons">
        <button type="button" name="button" id="discButton"></button>
        <button type="button" name="button" id="taxButton"></button>
      </div><div id="tpriceTax">
        <div id="taxFlex">
          <div class="taxflex1 tflex">
            <span class="pp1">TAX CODE</span><span class="pp2">TPSTVQ2019</span>
          </div>
          <div class="taxflex2 tflex">
            <span class="pp1">TAX TOTAL</span><span class="pp2">0.90</span>
          </div>
        </div>
      </div><div class="tflex" id="tpricePrice">
        <div id="priceFlex">
          <div class="tflex" id="priceFlex1">
            <span class="pp1">SUBTOTAL</span><span class="pp2">5.99</span>
          </div>
          <div class="tflex" id="priceFlex2">
            <span class="pp1">TOTAL</span><span id="bigPrice" class="pp2">6.89</span>
          </div>
        </div>
        <!-- <span class="p1">SUBTOTAL</span><span class="p2">5.99</span><br>
        <span class="p1">TOTAL</span><span class="p2">6.89</span> -->
      </div>
    </div>
  </div>





</div>
