'use strict';

 var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var loc1 = {
//     name : 'Seattle',
//     minCustomerPerHour:23,
//     maxCustomerPerHour:65,
//     avgCookieSale: 6.3
    
// }

// var loc2 = {
//     name : 'Tokyo',
//     minCustomerPerHour:3,
//     maxCustomerPerHour:24,
//     avgCookieSale: 1.2
// }
// var loc3 = {
//     name : 'Dubai',
//     minCustomerPerHour:11,
//     maxCustomerPerHour:38,
//     avgCookieSale: 3.7
// }
// var loc4 = {
//     name : 'Paris',
//     minCustomerPerHour:20,
//     maxCustomerPerHour:38,
//     avgCookieSale: 2.3
// }
// var loc5 = {
//     name : 'Lima',
//     minCustomerPerHour:2,
//     maxCustomerPerHour:16,
//     avgCookieSale: 4.6
// }

// var box = document.getElementById('locationInfo1'); // creates a container for everything in the div block
// // box.textContent = "Youu";

// var article = document.createElement('article');  //create the article
// // article.textContent = "I am an Article";   //set text for the article
// box.appendChild(article); // add to the Document

// var p = document.createElement('p');
// // p.textContent = 'hey';
// article.appendChild(p);



// var ul = document.createElement('ul');
// var total = 0;
// for (var x = 0; x < hours.length; x++){
//     var cookyCount = Math.ceil((loc1.avgCookieSale) * (Math.floor(Math.random() * (loc1.maxCustomerPerHour - loc1.minCustomerPerHour) + loc1.minCustomerPerHour)));
//     total += cookyCount;
//     var li = document.createElement('li') ;
//     li.textContent = hours[x] + ':' + " " + cookyCount + " " + "cookies";

//     article.appendChild(li);
// }
// li.textContent = "Total" + " " + total + " " + "cookies";

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var box = document.getElementById('locationInfo2'); // creates a container for everything in the div block
// // box.textContent = "Youu";

// var article = document.createElement('article');  //create the article
// box.appendChild(article); // add to the Document

// var p = document.createElement('p');
// // p.textContent = 'hey';
// article.appendChild(p);

// var ul = document.createElement('ul');
// var total = 0;
// for (var x = 0; x < hours.length; x++){
//     var cookyCount = Math.ceil((loc2.avgCookieSale) * (Math.floor(Math.random() * (loc2.maxCustomerPerHour - loc2.minCustomerPerHour) + loc2.minCustomerPerHour)));
//     total += cookyCount;
//     var li = document.createElement('li') ;
//     li.textContent = hours[x] + ':' + " " + cookyCount + " " + "cookies";

//     article.appendChild(li);
// }
// li.textContent = "Total" + " " + total + " " + "cookies";

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var box3 = document.getElementById('locationInfo3'); // creates a container for everything in the div block
// // box.textContent = "Youu";

// var article = document.createElement('article');  //create the article
// box3.appendChild(article); // add to the Document

// var p = document.createElement('p');
// // p.textContent = 'hey';
// article.appendChild(p);

// var ul = document.createElement('ul');
// var total = 0;
// for (var x = 0; x < hours.length; x++){
//     var cookyCount = Math.ceil((loc3.avgCookieSale) * (Math.floor(Math.random() * (loc3.maxCustomerPerHour - loc3.minCustomerPerHour) + loc3.minCustomerPerHour)));
//     total += cookyCount;
//     var li = document.createElement('li') ;
//     li.textContent = hours[x] + ':' + " " + cookyCount + " " + "cookies";

//     article.appendChild(li);
// }
// li.textContent = "Total" + " " + total + " " + "cookies";

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var box = document.getElementById('locationInfo4'); // creates a container for everything in the div block
// // box.textContent = "Youu";

// var article = document.createElement('article');  //create the article
// box.appendChild(article); // add to the Document

// var p = document.createElement('p');
// // p.textContent = 'hey';
// article.appendChild(p);

// var ul = document.createElement('ul');
// var total = 0;
// for (var x = 0; x < hours.length; x++){
//     var cookyCount = Math.ceil((loc4.avgCookieSale) * (Math.floor(Math.random() * (loc4.maxCustomerPerHour - loc4.minCustomerPerHour) + loc4.minCustomerPerHour)));
//     total += cookyCount;
//     var li = document.createElement('li') ;
//     li.textContent = hours[x] + ':' + " " + cookyCount + " " + "cookies";

//     article.appendChild(li);
// }
// li.textContent = "Total" + " " + total + " " + "cookies";

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var box = document.getElementById('locationInfo5'); // creates a container for everything in the div block
// // box.textContent = "Youu";

// var article = document.createElement('article');  //create the article
// box.appendChild(article); // add to the Document

// var p = document.createElement('p');
// // p.textContent = 'hey';
// article.appendChild(p) great bob so far;



// var ul = document.createElement('ul');
// var total = 0;
// for (var x = 0; x < hours.length; x++){
//     var cookyCount = Math.ceil((loc5.avgCookieSale) * (Math.floor(Math.random() * (loc5.maxCustomerPerHour - loc5.minCustomerPerHour) + loc5.minCustomerPerHour)));
// //     total += cookyCount;
//     var li = document.createElement('li') ;
//     li.textContent = hours[x] + ':' + " " + cookyCount + " " + "cookies";

//     article.appendChild(li);
// }
// li.textContent = "Total" + " " + total + " " + "cookies";

//var hourlyCookies = [];
function Location(name, minCustomerPerHour, maxCustomerPerHour, avgCookieSale){
    this.name = name;
    this.minCustomerPerHour = minCustomerPerHour;
    this.maxCustomerPerHour = maxCustomerPerHour;
    this.avgCookieSale = avgCookieSale;
    //this.hourlyCookies.push(this.hourlyCookies());
    this.hourlyCookies = [];
    //this.totalCookies = 0;
    this.salesTotal = 0;
    //this.getCookyPerHour();
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
arrOfStores.push(new Location('seatle', 23,34,6.3,7, hours))
arrOfStores.push(new Location('tokyo', 3,24,3,1.2,hours))
arrOfStores.push(new Location('dubai', 11,38,6,3.7,hours))
arrOfStores.push(new Location('paris', 20,38,5,2.3,hours))
arrOfStores.push(new Location('lima', 2,16,3,4.6,hours))

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
    var tbody = document.createElement('tbody')  // testing
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

function footerRow (table) {

    var tr = document.createElement('tr');
    table.appendChild(tr);
    var totalTD = document.createElement('td');
    tr.appendChild(totalTD);     //appending the cell (td) to the tr. 
    // testing
    totalTD.textContent = 'Total';

    var megaSumHolder = 0;
    for (var x = 0; x < hours.length; x++){
        var sum =0;
        for(var j = 0; j <arrOfStores.length; j++){
            var currentStore = arrOfStores[j];
            sum+= currentStore.hourlyCookies[x]; 
            megaSumHolder += currentStore.salesTotal;  

        }
        // td.textContent = 'Total';
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = sum;
        // sum+= hours[x];
    }
    var tdMega = document.createElement('td');
    tr.appendChild(tdMega);
    //var megaSum = 0;
    tdMega.textContent = (megaSumHolder/14);

}

var tabEl = document.getElementById('salesData');
th(tabEl);
arrOfStores[0].renderPage(tabEl);
arrOfStores[1].renderPage(tabEl);
arrOfStores[2].renderPage(tabEl);
arrOfStores[3].renderPage(tabEl);
arrOfStores[4].renderPage(tabEl);
footerRow(tabEl);

