'use strict' ;

var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

var psw = document.getElementById('loginForm').addEventListener('submit',checkPassword);
function checkPassword() {
  var passw = 'password';
  if(loginForm.psw.value.toLowerCase() === passw){
    event.preventDefault();
    var loginName = document.getElementById('Loginname');
    loginName.style.visibility = 'visible';
    modal.style.visibility = 'hidden';
    // .innerHTML = 'Welcome STEP UP Team!';
  }
}

var allOrganizations = [];
console.log(allOrganizations);
if(localStorage.newClick){
  var newClicks = JSON.parse(localStorage.newClick);
  for(var i = 0; i < newClicks.length; i++){
    allOrganizations[i] = newClicks[i];
    createDiv();
  }
}
function Organization(name, address, amount, need) {
  this.name = name;
  this.address = address;
  this.amount = amount;
  this.need = need;
  this.list = [];
  allOrganizations.push(this);
}
function addOrganization(event) {
  event.preventDefault();
  console.log(event.target[0]);
  var newName = event.target.name.value;
  var newAddress = event.target.address.value;
  var newAmount = event.target.amount.value;
  var newNeed = event.target.need.value;

  // var newList = event.target.list.value;
  new Organization(newName, newAddress, newAmount, newNeed);
  // papa.innerHTML = ' ';

  event.target.name.value = null;
  event.target.address.value = null;
  event.target.amount.value = null;
  event.target.need.value = null;
  localStorage.newClick = JSON.stringify(allOrganizations);
  createDiv();
}
function createDiv() {
  var papa = document.getElementById('papa');
  for(var i = 0; i < allOrganizations.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'baby');
    var babyButton = document.createElement('a');
    babyButton.setAttribute('id', 'babyButton');
    babyButton.setAttribute('href','https://www.paypal.com/donate/?token=lCxyAUCKWYMaPFjkon0BGfv5co6jhEnqOH11ZH_SsMgdDrCAu34ib96utBMMdDhvaUW8EG&country.x=US&locale.x=US');
    babyButton.setAttribute('target','_blank');

    babyButton.textContent = 'I want to Help!';
    div.appendChild(babyButton);
    var pName = document.createElement('p');
    pName.setAttribute('id', 'pName');
    pName.textContent = 'ORGANIZATION:  ' + allOrganizations[i].name;
    div.appendChild(pName);
    var pAddress = document.createElement('p');
    pAddress.setAttribute('id', 'pAddress');
    pAddress.textContent = 'ADDRESS:  ' + allOrganizations[i].address;
    div.appendChild(pAddress);
    // Added amount
    var pAmount = document.createElement('p');
    pAmount.setAttribute('id', 'pAmount');
    pAmount.textContent = 'AMOUNT:  ' + allOrganizations[i].amount;
    div.appendChild(pAmount);

    var pNeed = document.createElement('p');
    pNeed.setAttribute('id', 'pNeed');
    pNeed.textContent = 'NEED:  ' + allOrganizations[i].need;
    div.appendChild(pNeed);

    var storage = JSON.parse(localStorage.newClick);
  }
  papa.appendChild(div);
}
document.getElementById('resourceRequest').addEventListener('submit', addOrganization);
// document.getElementById('babyButton').addEventListener('onclick',donate);
//
// function donate(){
//   window.open(url,'https://www.paypal.com/donate/?token=lCxyAUCKWYMaPFjkon0BGfv5co6jhEnqOH11ZH_SsMgdDrCAu34ib96utBMMdDhvaUW8EG&country.x=US&locale.x=US');
// }
