<!-- https://www.w3schools.com/howto/howto_js_curtain_menu.asp -->

<div id="transactionScreen">
  <button id="goBack">
    <span>&#x27aa;</span>
  </button>

  <div id="ttopBar">
    <div id="ttopButtons">
      <input id="tsearch" type="search" name="search" placeholder="Search Products" autofocus>
      <button id="tsearchProduct" type="button" name="button"><img width="100%" height="32" src="pics/littlevinyl.png"></button>
      <button id="tsearchCustomer" type="button" name="button"><img width="100%" height="32" src="pics/littlecustomer.jpg"></button>
    </div>
    <!-- <button type="button" name="button" id="holdButton">Hold</button> -->
  </div>

  <div id="tmainBox">
    <div id="tleftBox">
      <div id="tcustomerBox">
        <!-- <div id="tcwbox"> -->
          <div id="tcustomertitleBox">
            <span id="tcustomertitle">Customer</span>
          </div>
          <div id="twalkintitleBox">
            <span id="twalkintitle">Walk In</span>
          </div>

          <!-- <span id="twalkintitle">Walk In</span><br> -->
        <!-- </div> -->
        <div id="tcustomerInfo">
            <div id="tcustomerNameBox">
                <button type="button" id="teditCustomer" name="button"><img width="30" height="30" src="pics/edit.jpg"></button><span id="tcustomername">Nathalie Raffray</span>
            </div>
            <div id="tcustomerInfoetc">
              <span class="bold" id="tphonetitle">Phone</span><span class="notbold" id="tphone">(438) 926-7260</span><br>
              <span class="bold" id="temailtitle">Email</span><span class="notbold" id="temail">nathalie.raffray9@gmail.com</span><br>
              <span class="bold" id="tshippingtitle">Shipping</span><div class="notbold" id="tshipping">
                <span id="taddress1">555 dead dog lane</span><br>
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
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1.99
            </div>
            <div class="buttondescription">
              10 Pochettes Exterieures
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $17.99
            </div>
            <div class="buttondescription">
              100 Pochettes Exterieures
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $2.99
            </div>
            <div class="buttondescription">
              10 Pochettes Interieures
            </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $24.99
              </div>
              <div class="buttondescription">
                100 Pochettes Interieures
              </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $3.49
              </div>
              <div class="buttondescription">
                10 Pochettes Japonaises
              </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $34.99
              </div>
              <div class="buttondescription">
                100 Pochettes Japonaises
              </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $1.49
              </div>
              <div class="buttondescription">
                10 Pochettes 7"
              </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $12.99
              </div>
              <div class="buttondescription">
                100 Pochettes 7"
              </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $6.99
              </div>
              <div class="buttondescription">
                25 Pochettes Interieures Papiers
              </div>
            </button>
            <button type="button" name="button" class="tbflex">
              <div class="buttonprice">
                $74.99
              </div>
              <div class="buttondescription">
                500 Pochettes Exterieures
              </div>
          </button>
        </div>

        <div id="gearBox" class="tbuttonBox" style="display:none">
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $24.99
            </div>
            <div class="buttondescription">
              Reparation: 0.5 heure(s)
            </div>
        </button>
        <button type="button" name="button" class="tbflex">
          <div class="buttonprice">
            $39.99
          </div>
          <div class="buttondescription">
            Reparation: 1.0 heure(s)
          </div>
        </button>
        <button type="button" name="button" class="tbflex">
          <div class="buttonprice">
            $49.99
          </div>
          <div class="buttondescription">
            Reparation: 1.5 heure(s)
          </div>
        </button>
        <button type="button" name="button" class="tbflex">
          <div class="buttonprice">
            $0.00
          </div>
          <div class="buttondescription">
            Pieces De Rechange
          </div>
        </button>
        <button type="button" name="button" class="tbflex">
          <div class="buttonprice">
            $9.99
          </div>
          <div class="buttondescription">
            Courroie
          </div>
        </button>
        <button type="button" name="button" class="tbflex">
          <div class="buttonprice">
            $2.99
          </div>
          <div class="buttondescription">
            Dome Pour 45-Tours
          </div>
        </button>
        <button type="button" name="button" class="tbflex">
          <div class="buttonprice">
            $10.00
          </div>
          <div class="buttondescription">
            Installation De Cartouche
          </div>
        </button>
        </div>

        <div id="dranksBox" class="tbuttonBox" style="display:none">
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.99
            </div>
            <div class="buttondescription">
              bouteille d'eau
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.99
            </div>
            <div class="buttondescription">
              7up
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1.49
            </div>
            <div class="buttondescription">
              Perrier
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.99
            </div>
            <div class="buttondescription">
              Pepsi
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1.49
            </div>
            <div class="buttondescription">
              Gatorade
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1.49
            </div>
            <div class="buttondescription">
              Jus Oasis
            </div>
          </button>
        </div>

        <div id="otherBox" class="tbuttonBox" style="display:none">
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.00
            </div>
            <div class="buttondescription">
              Contrat Achat - VINYL
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.00
            </div>
            <div class="buttondescription">
              Contrat Achat - GEAR
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1.99
            </div>
            <div class="buttondescription">
              Sac Aux 33 Tours
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.99
            </div>
            <div class="buttondescription">
              Liquidation 45 Tours
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1000.00
            </div>
            <div class="buttondescription">
              Album Discogs - AUCUNE REQUETE
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $1000.00
            </div>
            <div class="buttondescription">
              Album Discogs - REQUETE EN LIGNE
            </div>
          </button>
          <button type="button" name="button" class="tbflex">
            <div class="buttonprice">
              $0.00
            </div>
            <div class="buttondescription">
              Carte Cadeau
            </div>
          </button>
        </div>
      </div>
    </div>
    <div id="tMiddleBox">

      <table id="transactionTable" style="display:none">
        <tr>
          <th> Qty</th>
          <th> Product</th>
          <th> Sell</th>
          <th> Disc.</th>
          <th> Total Sell</th>
        </tr>

        <!-- <div id="transactionTableBox"> -->
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

          <tr id="transactionSampleRow" style="display:none">
            <td><input class="qty" type="text" name="qty" value="1"></td>
            <td>
              <span class="productName"></span><br>
              <span class="productId"></span>
            </td>
            <td><input type="text" class="sell" name="sell" value=""></td>
            <td><input type="text" class="discount" name="discount" value="0"></td>
            <td><input type="text" class="totalsell" name="totalsell" value=""></td>
          </tr>
        <!-- </div> -->


      </table>

      <table id="tsearchTable">

        <tr>
          <th class="marker">Code</th>
          <th>Description</th>
          <th>Price</th>
          <th>Inventory</th>
        </tr>

        <tr>
          <td>CD00002635</td>
          <td>Hiroshi Yoshimura - Music For Nine Postcards</td>
          <td>10.99</td>
          <td>
            <button type="button" name="button" class="tinventorybutt">
              <span id="tbuttAvailable">Available</span>
              <span id="tbuttQty">1</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>CD00002635</td>
          <td>Hiroshi Yoshimura - Music For Nine Postcards</td>
          <td>10.99</td>
          <td>
            <button type="button" name="button" class="tinventorybutt">
              <span id="tbuttAvailable">Available</span>
              <span id="tbuttQty">1</span>
            </button>
          </td>
        </tr>

      </table>
    </div>
    <!-- <div id="tRightBox">

    </div> -->
  </div>

  <div id="tbottomBar">
    <button type="button" name="button" id="clear">Clear</button>
    <button type="button" name="button" id="on hold">
      <span id="howManyHold">15</span>
      Currently On Hold</button>
    <button type="button" name="button" id="checkout">Check Out</button>
    <div id="tpriceBox">
      <div id="tpriceButtons">
        <button type="button" name="button" id="discButton"><img width="30" height="20" src="pics/edit.jpg"></button>
        <button type="button" name="button" id="taxButton"><img width="30" height="20" src="pics/edit.jpg"></button>
      </div><div id="tpriceTax">
        <div id="taxFlex">
          <div class="taxflex1 tflex">
            <span class="pp1">TAX CODE</span><span id="taxcode" class="pp2">TPSTVQ2019</span>
          </div>
          <div class="taxflex2 tflex">
            <span class="pp1">TAX TOTAL</span><span id="taxtotal" class="pp2">0.90</span>
          </div>
        </div>
      </div><div class="tflex" id="tpricePrice">
        <div id="priceFlex">
          <div class="tflex" id="priceFlex1">
            <span class="pp1">SUBTOTAL</span><span id="subtotal" class="pp2">11.98</span>
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
