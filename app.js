'use strict';

 var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Location(name, minCustomerPerHour, maxCustomerPerHour, avgCookieSale){
    this.name = name;
    this.minCustomerPerHour = minCustomerPerHour;
    this.maxCustomerPerHour = maxCustomerPerHour;
    this.avgCookieSale = avgCookieSale;
    this.hourlyCookies = [];
    this.salesTotal = 0;
}

Location.prototype.getCookyPerHour = function () {
    for (var x = 0; x < hours.length; x++){
        var cookyCount = Math.ceil((this.avgCookieSale) * (Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour)));
        this.hourlyCookies.push(cookyCount);
        this.salesTotal +=cookyCount;
    }
    console.log("total is : ", this.salesTotal);

}





var arrOfStores = [];
arrOfStores.push(new Location('seatle', 23,34,6.3,7))
arrOfStores.push(new Location('tokyo', 3,24,3,1.2))
arrOfStores.push(new Location('dubai', 11,38,6,3.7))
arrOfStores.push(new Location('paris', 20,38,5,2.3))
arrOfStores.push(new Location('lima', 2,16,3,4.6))

console.log('arr :', arrOfStores);

arrOfStores[0].getCookyPerHour();
arrOfStores[1].getCookyPerHour();
arrOfStores[2].getCookyPerHour();
arrOfStores[3].getCookyPerHour();
arrOfStores[4].getCookyPerHour();

function th(table){
    var thead = document.createElement('thead');
    table.appendChild(thead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    
    var citEle = document.createElement('th');
    tr.appendChild(citEle);
    citEle.textContent = 'Cities';
    
    
    for (var x=0; x<hours.length;x++){
        var th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours[x];
    }
    
    var citEle = document.createElement('th');
    tr.appendChild(citEle);
    citEle.textContent = 'Total';
}
Location.prototype.renderPage = function (table){
    var tbody = document.createElement('tbody')  
    table.appendChild(tbody);
    
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    var th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = this.name;
    for (var x = 0; x < this.hourlyCookies.length; x++){
        var td = document.createElement('td');
        td.textContent = this.hourlyCookies[x];
        tr.appendChild(td);
    }
    var totalTD = document.createElement("td");
    tr.appendChild(totalTD);
    totalTD.textContent = this.salesTotal;
    
} 

//new algorithhm implementation

var footer = document.getElementById('footer');
// table.appendChild(tfooter);
// footerRow.innerHTML = ' ';



function addFooterRow (table) {
    
    var tr = document.createElement('tr');
    //testing from here
    //tr.setAttribute
    table.appendChild(tr);
    var totalTD = document.createElement('td');
    tr.appendChild(totalTD);     
    totalTD.textContent = 'Total';
    
    var megaSumHolder = 0;
    for (var x = 0; x < hours.length; x++){
        var sum =0;
        for(var j = 0; j <arrOfStores.length; j++){
            var currentStore = arrOfStores[j];
            sum+= currentStore.hourlyCookies[x]; 
            megaSumHolder += currentStore.salesTotal;  
            
        }
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = sum;
    }
    var tdMega = document.createElement('td');
    tr.appendChild(tdMega);
    tdMega.textContent = (megaSumHolder/14);
    
}
var form = document.getElementById("fishStoreForm");
var tabEl = document.getElementById('salesData');


function submitNewStore (event){
    event.preventDefault();   
    var store = new Location(event.target.name.value, parseInt(event.target.minCustomerPerHour.value),  parseInt(event.target.maxCustomerPerHour.value),  parseFloat(event.target.avgCookieSale.value));
    store.getCookyPerHour();
    store.renderPage(tabEl);
    arrOfStores.push(store);
    footer.innerHTML = '';
    addFooterRow(footer);
    //th();
    event.target.reset();   
    console.log(store)
}

form.addEventListener('submit', submitNewStore);
//console.log('object:', store);
th(tabEl);
arrOfStores[0].renderPage(tabEl);
arrOfStores[1].renderPage(tabEl);
arrOfStores[2].renderPage(tabEl);
arrOfStores[3].renderPage(tabEl);
arrOfStores[4].renderPage(tabEl);
//arrOfStores[5].renderPage(tabEl);

addFooterRow(footer);