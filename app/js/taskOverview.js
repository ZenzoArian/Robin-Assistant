// create time table for agenda.
var str = '';
var zero = '';

for (i=1; i <= 24; i++) {
    if (i < 10) {
        zero = '0';
    } else {
        zero = '';
    }
    str += '<div class="schedule-time"><p>' + zero + i + ':00</p></div>'
};

document.getElementById("schedule-time--container").innerHTML = str;

// create day names table for agenda header.
var DayNames = ["mon", "tue", "wed", "the", "fri", "sat", "sun"]
var str = '';

DayNames.forEach(function(DayName) {
  str += '<span><p>' + DayName + '</p></span>';
}); 

document.getElementById("days--names").innerHTML = str;

// create day numbers table for agenda header.
var str = '<div class="days--first">';
var r = false;
var s = false;

for (i=1; i <= 28 && !s; i++) {

    str += '<span class="days--number"><p>' + i + '</p></span>';

    var remainder = i % 7;
    if (remainder == 0){
        //i is a multiple of 7
        str += '</div>';
        if (i != 28) {
            if (r) {
                str += '<div class="days--doubles">';
            } else {
                str += '<div>';
            }
        }
    }
    if (i == 28 && r) {
        s = true;
    } else if (i==28) {
        r = true;
        i = 0;
        str += '<div class="days--doubles">';
    }

};

document.getElementById("days--numbers").innerHTML = str;

//change agenda display
var dateCon = '15%';
var scheCon = '85%';
var element = 'nav--day';
var elementList = ['nav--day', 'nav--week', 'nav--month'];

function switchDisplay(selected) {
    if (selected == 'week') {
        dateCon = '25%';
        scheCon = '75%';
        element = 'nav--week';
    } else if ( selected == 'month'){
        dateCon = '46%';
        scheCon = '54%';
        element = 'nav--month';
    } else {
        dateCon = '15%';
        scheCon = '85%';
        element = 'nav--day';
    }

    document.getElementById('date--container').style.height = dateCon;
    document.getElementById('schedule--container').style.height = scheCon;
    
    //change active button
    elementList.forEach(element => {
        document.getElementById(element).classList.remove("nav--button-active");
    });
    document.getElementById(element).classList.add("nav--button-active");

    document.getElementById('tasks--container').scrollIntoView();
}

//add or remove active class of days-number elements
var selectedDay = document.getElementsByClassName('days--number');
for (var i = 0; i < selectedDay.length; i++) {
    selectedDay[i].onclick = function(target) {
        [].forEach.call(selectedDay, function(day) { 
        day.classList.remove("days--number-active"); 
        });
        this.classList.add("days--number-active");
        var elements = document.getElementsByClassName('tasks--item');
        for(var i=0; i<elements.length; i++) { 
            elements[i].style.opacity = '0';
            setTimeout(function(){ 
                var elements = document.getElementsByClassName('tasks--item');
                for(var i=0; i<elements.length; i++) {
                    elements[i].style.opacity = '1'; 
                }
            }, 500);
        }
    }
}

//redirect user to clicked task
var testy = document.getElementById('tasks-open').onclick = function() { 
    window.location.href = "#";
};