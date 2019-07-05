<div class="content" id="customHTML_sfProducts">
  <ul id="smartFindRows">
    <li id="quantifier1">
      <select class="filter"> <!-- name="quantifier1" form="smartFind" -->
        <option value="All">All</option>
        <option value="Any">Any</option>
        <option value="None">None</option>
      </select>
      <span>of the following are true</span>
      <div class="plusminusdiv">
          <button type="button" class="plus" name="button">+</button>
      </div>
    </li>
    <li class="under1">
      <select class="filter firstFilter"> <!-- name="smfFilter11" form="smartFind" -->
          <option value="Product Code">id</option>
          <option value="Description">name</option>
          <option value="Artist">phone number</option>
          <option value="Album">email</option>
          <option value="Genre">points</option>
          <option value="Label">discount</option>
          <option value="Price">postal code</option>
          <option value="Quantity">city</option>
          <option value="All">All</option>
      </select>
      <select class="filter secondFilter2">
        <option value="is_equal_to">is equal to</option>
        <option value="is_not_equal_to">is not equal to</option>
        <option value="less_than">less than</option>
        <option value="greater_than">greater than</option>
        <option value="greater_than_or_equal">greater than or equal</option>
        <option value="is_between">is between</option>
      </select>
      <input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
      <div class="plusminusdiv">
        <button type="button" class="minus" name="button">-</button>
          <button type="button" class="plus" name="button">+</button>
      </div>
    </li>
    <li class="under1" id="quantifier2">
      <select class="filter" id="quant2">
        <option value="All">All</option>
        <option value="Any">Any</option>
        <option value="None">None</option>
      </select>
      <span>of the following are true</span>
      <div class="plusminusdiv">
          <button type="button" class="minus" name="button">-</button>
          <button type="button" class="plus" name="button">+</button>
      </div>
    </li>
    <li class="under2">
      <select class="filter firstFilter">
        <option value="Product Code">id</option>
        <option value="Description">name</option>
        <option value="Artist">phone number</option>
        <option value="Album">email</option>
        <option value="Genre">points</option>
        <option value="Label">discount</option>
        <option value="Price">postal code</option>
        <option value="Quantity">city</option>
          <option value="All">All</option>
      </select>
      <select class="filter secondFilter2">
        <option value="is_equal_to">is equal to</option>
        <option value="is_not_equal_to">is not equal to</option>
        <option value="less_than">less than</option>
        <option value="greater_than">greater than</option>
        <option value="greater_than_or_equal">greater than or equal</option>
        <option value="is_between">is between</option>
      </select>
      <input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
      <div class="plusminusdiv">
          <button type="button" class="minus" name="button">-</button>
          <button type="button" class="plus" name="button">+</button>
      </div>
    </li>
    <li class="under2">
      <select class="filter firstFilter">
        <option value="Product Code">id</option>
        <option value="Description">name</option>
        <option value="Artist">phone number</option>
        <option value="Album">email</option>
        <option value="Genre">points</option>
        <option value="Label">discount</option>
        <option value="Price">postal code</option>
        <option value="Quantity">city</option>
          <option value="All">All</option>
      </select>
      <select class="filter secondFilter2">
        <option value="is_equal_to">is equal to</option>
        <option value="is_not_equal_to">is not equal to</option>
        <option value="less_than">less than</option>
        <option value="greater_than">greater than</option>
        <option value="greater_than_or_equal">greater than or equal</option>
        <option value="is_between">is between</option>
      </select>
      <input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
      <div class="plusminusdiv">
        <button type="button" class="minus" name="button">-</button>
          <button type="button" class="plus" name="button">+</button>
      </div>
    </li>
    <li id="customProductSmartFindRow" style = "display:none">
      <select class="filter firstFilter">
        <option value="Product Code">id</option>
        <option value="Description">name</option>
        <option value="Artist">phone number</option>
        <option value="Album">email</option>
        <option value="Genre">points</option>
        <option value="Label">discount</option>
        <option value="Price">postal code</option>
        <option value="Quantity">city</option>
          <option value="All">All</option>
      </select>
      <select class="filter secondFilter2">
        <option value="is_equal_to">is equal to</option>
        <option value="is_not_equal_to">is not equal to</option>
        <option value="less_than">less than</option>
        <option value="greater_than">greater than</option>
        <option value="greater_than_or_equal">greater than or equal</option>
        <option value="is_between">is between</option>
      </select>
      <input type="text" name="text" class="smfTextBox" form="smartFind" autofocus>
      <div class="plusminusdiv">
        <button type="button" class="minus" name="button">-</button>
        <button type="button" class="plus" name="button">+</button>
      </div>
    </li>
    <form id="smartFind">
      <input type="submit" name="submit" value="" style="display:none">
    </form>
  </ul>

</div>

<div id="customProductSmartFindSelect" style="display:none"><select class="filter secondFilter1" id="secondFilter1" >
    <option value="contains">contains</option>
    <option value="ends_with">ends with</option>
    <option value="begins_with">begins with</option>
    <option value="is">is</option>
    <option value="is_not">is not</option></select><select class="filter secondFilter2" id="secondFilter2">
    <option value="is_equal_to">is equal to</option>
    <option value="is_not_equal_to">is not equal to</option>
    <option value="less_than">less than</option>
    <option value="greater_than">greater than</option>
    <option value="greater_than_or_equal">greater than or equal</option>
    <option value="is_between">is between</option>
  </select></div>
