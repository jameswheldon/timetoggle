var month = {
    name: 'January',
    startDay: 3,
    duration: 30,
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
}

let yrNow = new Date().getFullYear();



var writeMonth = (month, element) => {

    // create a header for the month name
    var title = document.createElement('h1');
    title.textContent = month.name;
    title.classList.add('tbl-title');


    var dayOfMonth = 1;

    // Create empty table
    var tbl = document.createElement('table');

    tbl.classList.add('tbl-view');


    // The days on top
        var trDays = tbl.insertRow();


        for (var i = 0; i < month.days.length; i++) {
            var tr = trDays.insertCell();
            tr.textContent = month.days[i];
            tbl.classList.add('tbl-days');

        }


        // number dates
    for(var i=0; i < 5; i++) {
        var tr = tbl.insertRow();

        for(var j=0; j <= 6; j++) {
            var td = tr.insertCell();

            //console.log((j+(i*7)+1))
            if ( (j+(i*7)+1) > month.startDay-1
            && (j+(i*7)+1) <= month.duration
            ){
                td.textContent = j+(i*7)+2-month.startDay;
                td.classList.add('tbl-dates');

            }
        }
    }
    element.appendChild(title)
    element.appendChild(tbl)
}

var ele = document.getElementById("calExample");
writeMonth(month, ele);
writeMonth(month, ele);
writeMonth(month, ele);


// Homework
/* Add days of the week in the first row. 
   1. Before starting the loop add 1 row. 
   2. Populate the row based on an array -- you do this to
      be able to support language translation, rather than hard
      coding it.
    3. Style it

    Research data binding to data objects
*/